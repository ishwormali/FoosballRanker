using FoosballRanker.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoosballRanker.Services
{
    public interface IFoosballService
    {
        Task<IEnumerable<Participant>> GetAllParticipants();

        Task<Participant> GetParticipantById(int id);

        Task<Participant> AddParticipant(Participant participant);

        Task<IEnumerable<Match>> GetAllMatches();

        Task<Match> GetMatchById(int id);

        Task<Match> AddMatch(Match match);
        
    }
}
