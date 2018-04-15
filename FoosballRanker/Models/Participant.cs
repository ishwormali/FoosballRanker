using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoosballRanker.Models
{
    /// <summary>
    /// Participant
    /// </summary>
    public class Participant
    {
        /// <summary>
        /// Id of the participant
        /// </summary>
        public int Id { get; set; }
        
        /// <summary>
        /// Name of the participant
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Date participant was created
        /// </summary>
        public DateTime CreatedDate { get; set; }

        /// <summary>
        /// All the matches this participant has participated in
        /// </summary>
        public virtual ICollection<MatchParticipant> Matches { get; set; }
    }
}
