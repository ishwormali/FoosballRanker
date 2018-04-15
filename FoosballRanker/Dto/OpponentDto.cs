using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoosballRanker.Dto
{
    public class Opponent
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int TotalMatches { get; set; }

        public int TotalWins { get; set; }

        public int TotalLosses { get; set; }

        public int TotalDraws { get; set; }
        
    }
}
