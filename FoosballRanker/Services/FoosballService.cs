using FoosballRanker.Models;
using FoosbalRanker.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoosballRanker.Services
{
    public class FoosballService:IFoosballService
    {
        readonly ApplicationDbContext _dbContext;
        public FoosballService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Match> AddMatch(Match match)
        {
            _dbContext.Matches.Add(match);
            await _dbContext.SaveChangesAsync();
            return match;
        }

        public async Task<Participant> AddParticipant(Participant participant)
        {
            _dbContext.Participants.Add(participant);
            await _dbContext.SaveChangesAsync();
            return participant;
        }

        public async Task<IEnumerable<Match>> GetAllMatches()
        {
            return await _dbContext.Matches
                .Include(m=>m.Participants).ThenInclude(x=>x.Participant)
                .OrderByDescending(o => o.CreatedDate).ToListAsync();
        }

        public async Task<IEnumerable<Participant>> GetAllParticipants()
        {
            return await _dbContext.Participants.Include(m => m.Matches).OrderByDescending(o=>o.CreatedDate).ToListAsync();
        }

        public async Task<Match> GetMatchById(int id)
        {
            return await _dbContext.Matches.Include(m => m.Participants)
                    .ThenInclude(x => x.Participant).FirstOrDefaultAsync(m=>m.Id==id);
        }

        public async Task<Participant> GetParticipantById(int id)
        {
            return await _dbContext.Participants.Include(m => m.Matches)
                .ThenInclude(x => x.Match)
                .ThenInclude(x => x.Participants)
                .ThenInclude(x=>x.Participant)
                .FirstOrDefaultAsync(m => m.Id == id);

        }


    }
}
