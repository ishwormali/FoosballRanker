using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoosbalRanker.Dto
{
    /// <summary>
    /// Dto for auction item
    /// </summary>
    public class AuctionItemDto
    {
        /// <summary>
        /// Auction item identifier
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Auction Item title
        /// </summary>
        public string Title { get; set; }
        
        /// <summary>
        /// Auction Item description
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Auction Item image url
        /// </summary>
        public string ImageUrl { get; set; }

        /// <summary>
        /// Formated string for created date
        /// </summary>
        public string CreatedDateFormat { get; set; }

        /// <summary>
        /// Formatted string of auction end date
        /// </summary>
        public string AuctionEndDateFormat
        {
            get
            {
                return AuctionEndDate.ToShortTimeString();
            }
        }

        
        public DateTime AuctionEndDate { get; set; }

        public bool CanBid { get; set; }

        public double HighestBid { get; set; }
    }
}
