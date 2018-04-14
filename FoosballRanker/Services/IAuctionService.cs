using FoosbalRanker.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoosbalRanker.Services
{
    public interface IAuctionService
    {
        Task<IEnumerable<AuctionItem>> GetAuctions();
        AuctionItem GetAuctionById(int id);

        Bid AddBid(Bid bid);

        Task<IEnumerable<AuctionItem>> GetExpiredAuctions();
    }
}
