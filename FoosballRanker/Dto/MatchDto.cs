using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoosballRanker.Dto
{
    public class MatchDto
    {
        public string Id { get; set; }

        public string DateCreatedFormatted { get; set; }

        public string Winner { get; set; }

        public int WinnerId { get; set; }

        public IEnumerable<MatchParticipantDto> Participants { get; set; }
        
    }
}
