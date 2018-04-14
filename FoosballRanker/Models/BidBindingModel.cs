using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FoosbalRanker.Models
{
    public class BidBindingModel
    {
        [Required]
        public double BidAmount { get; set; }
    }
}
