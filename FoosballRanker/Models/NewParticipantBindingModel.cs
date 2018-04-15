using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FoosballRanker.Models
{
    public class NewParticipantBindingModel
    {
        [Required]
        [MinLength(1)]
        public string Name { get; set; }
    }
}
