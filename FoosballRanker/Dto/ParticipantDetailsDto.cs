using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoosballRanker.Dto
{
    public class ParticipantDetailsDto:ParticipantDto
    {
        public IEnumerable<Opponent> Opponents { get; set; }
    }
}
