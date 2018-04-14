using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoosbalRanker.Models
{
    public class AuctionItem
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime AuctionEndDate { get; set; }

        public DateTime? AuctionCompletedDate { get; set; }

        public double BidAmount { get; set; }

        public virtual ICollection<Bid> Bids { get; set; }
    }
}
