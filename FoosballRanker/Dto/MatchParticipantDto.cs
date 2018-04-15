using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoosballRanker.Dto
{
    public class MatchParticipantDto
    {
        public int Id { get; set; }

        public int ParticipantId { get; set; }

        public string Name { get; set; }

        public int Score { get; set; }

    }
}
