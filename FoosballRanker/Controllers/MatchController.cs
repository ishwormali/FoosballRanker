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
    /// <summary>
    /// Api controller for match that allows client to fetch and add new match
    /// </summary>
    [Produces("application/json")]
    [Route("api/Match")]
    public class MatchController : Controller
    {
        readonly IFoosballService _foosballService;
        public MatchController(IFoosballService foosballService)
        {
            _foosballService = foosballService;
        }

        /// <summary>
        /// Gets all matches ordered descending by match created date
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<MatchDto>> GetAll()
        {
            var allMatches = await _foosballService.GetAllMatches();
            var dtos = Mapper.Map<IEnumerable<Match>, IEnumerable<MatchDto>>(allMatches);
            return dtos;
        }

        /// <summary>
        /// Get match by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("{id}")]
        public async Task<MatchDto> Get(int id)
        {
            var match = await _foosballService.GetMatchById(id);
            var dto = Mapper.Map<Match, MatchDto>(match);
            return dto;
        }

        /// <summary>
        /// Add new match
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> AddMatch([FromBody]NewMatchBindingModel model)
        {
            if(model==null || !ModelState.IsValid)
            {
                return BadRequest();
            }

            var newMatch = new Match() { CreatedDate=DateTime.Now,Participants=new List<MatchParticipant>()};
            var isDraw = model.Participants.Select(m => m.Score).Distinct().Count() == 1;
            var winnerId = 0;
            if (!isDraw)
            {
                var winner=model.Participants.FirstOrDefault(m => m.Score == model.Participants.Max(p => p.Score));
                if (winner != null)
                {
                    winnerId = winner.Id;
                }
            }
            foreach (var matchParticipant in model.Participants)
            {
                var newParticipant = new MatchParticipant()
                {
                    Match = newMatch,
                    MatchResult = isDraw ? MatchResultConstants.Draw : (winnerId == matchParticipant.Id ? MatchResultConstants.Win : MatchResultConstants.Loss),
                    ParticipantId = matchParticipant.Id,
                    Score = matchParticipant.Score
                };
                newMatch.Participants.Add(newParticipant);
            }
            

            await _foosballService.AddMatch(newMatch);
            return Ok();
        }
    }
}