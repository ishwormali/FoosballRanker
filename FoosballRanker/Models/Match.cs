using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FoosballRanker.Models
{
    /// <summary>
    /// Match 
    /// </summary>
    public class Match
    {
        /// <summary>
        /// Unique Identifier of the match
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Date of the match
        /// </summary>
        public DateTime CreatedDate { get; set; }
        
        
        /// <summary>
        /// All the participants of the match.
        /// </summary>
        public virtual List<MatchParticipant> Participants { get; set; }

    }
}
