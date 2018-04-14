using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FoosbalRanker.Models
{
    public class Bid
    {
        public int Id { get; set; }

        public int AuctionId { get; set; }

        public string UserId { get; set; }

        public DateTime BidDate { get; set; }

        public DateTime? AwardedDate { get; set; }

        public double BidAmount { get; set; }

        [ForeignKey("AuctionId")]
        public AuctionItem AuctionItem { get; set; }

        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }
    }
}
