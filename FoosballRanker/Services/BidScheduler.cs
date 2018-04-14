using FoosbalRanker.Data;
using FoosbalRanker.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoosbalRanker.Services
{
    public class BidScheduler
    {
        IAuctionService _auctionService;
        UserManager<ApplicationUser> _userManager;
        IEmailSender _emailSender;
        ApplicationDbContext _dbContext;
        public BidScheduler(IAuctionService auctionService, UserManager<ApplicationUser> userManager,IEmailSender emailSender,ApplicationDbContext dbContext)
        {
            _auctionService = auctionService;
            _userManager = userManager;
            _emailSender = emailSender;
            _dbContext = dbContext;
        }
        public async Task CheckBid()
        {
            var expiredAuctions=await _auctionService.GetExpiredAuctions();
            foreach (var expiredAuction in expiredAuctions)
            {
                var allBids = expiredAuction.Bids ?? new List<Bid>();
                var highestBid = allBids.OrderByDescending(m => m.BidAmount).FirstOrDefault();
                if (highestBid != null)
                {
                    var user = await _userManager.FindByIdAsync(highestBid.UserId);
                    await _emailSender.SendEmailAsync(user.Email, "Congratulation!!!!! You won a bid", $"Congratulation {user.Email}. You successfully won bid for {expiredAuction.Title}");
                    expiredAuction.AuctionCompletedDate = DateTime.Now;
                    expiredAuction.BidAmount = highestBid.BidAmount;
                    highestBid.AwardedDate = DateTime.Now;

                }

            }

            await _dbContext.SaveChangesAsync();
            
            
        }
    }
}
