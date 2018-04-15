using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FoosballRanker.Models
{
    public class NewMatchBindingModel
    {
        [Required]
        public IEnumerable<NewMatchParticipantBindingModel> Participants { get; set; }
    }
}
