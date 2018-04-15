using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FoosballRanker.Models
{
    /// <summary>
    /// Match participant details
    /// </summary>
    public class MatchParticipant
    {
        /// <summary>
        /// Unique Identifier of the Match participant
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Participant Id who participant in the match
        /// </summary>
        public int ParticipantId { get; set; }

        /// <summary>
        /// Score of the participant
        /// </summary>
        public int Score { get; set; }

        /// <summary>
        /// Parent Match Id this detail belongs to
        /// </summary>
        public int MatchId { get; set; }

        /// <summary>
        /// Indicates the match result. 1=win 2=loss 3=Draw
        /// </summary>
        public int MatchResult { get; set; }
        /// <summary>
        /// Represents the Participant model
        /// </summary>
        [ForeignKey("ParticipantId")]
        public virtual Participant Participant { get; set; }

        /// <summary>
        /// Refers to the parent Match model
        /// </summary>
        [ForeignKey("MatchId")]
        public virtual Match Match { get; set; }

    }
}
