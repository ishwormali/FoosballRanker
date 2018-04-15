using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FoosballRanker.Constants;
using FoosballRanker.Dto;
using FoosballRanker.Models;
using FoosballRanker.Services;
using FoosbalRanker.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FoosballRanker.Controllers
{
    [Produces("application/json")]
    [Route("api/Participant")]
    public class ParticipantController : Controller
    {
        readonly IFoosballService _foosballService;
        public ParticipantController(IFoosballService foosballService)
        {
            _foosballService = foosballService;
        }

        public async Task<IEnumerable<ParticipantDto>> GetAll()
        {
            var allParticipants = await _foosballService.GetAllParticipants();
            var dtos = Mapper.Map<IEnumerable<Participant>, IEnumerable<ParticipantDto>>(allParticipants);
            return dtos;
        }

        [Route("{id}")]
        public async Task<ParticipantDetailsDto> Get(int id)
        {
            var participant = await _foosballService.GetParticipantById(id);
            var dto = Mapper.Map<Participant, ParticipantDetailsDto>(participant);
            var otherParticipants = participant.Matches.SelectMany(m => m.Match.Participants.Where(p => p.ParticipantId != participant.Id));

            var opponents = new List<Opponent>();

            foreach (var item in otherParticipants.GroupBy(g=>g.ParticipantId))
            {
                var otherParticipant = item.FirstOrDefault();
                var opponent = new Opponent() { Id = item.Key, Name = otherParticipant.Participant.Name,
                    TotalLosses = item.Count(c => c.MatchResult == MatchResultConstants.Win),
                    TotalMatches = item.Count(), TotalWins = item.Count(c => c.MatchResult == MatchResultConstants.Loss),TotalDraws= item.Count(c => c.MatchResult == MatchResultConstants.Draw)
                };

                opponents.Add(opponent);
            }

            dto.Opponents = opponents;
            return dto;
        }

        [HttpPost]
        public async Task<IActionResult> AddParticipant([FromBody]NewParticipantBindingModel model)
        {
            if(model==null || !ModelState.IsValid)
            {
                return BadRequest();
            }

            var newParticipant = new Participant() { Name = model.Name, CreatedDate = DateTime.Now };
            await _foosballService.AddParticipant(newParticipant);
            return Ok();
        }
    }
}