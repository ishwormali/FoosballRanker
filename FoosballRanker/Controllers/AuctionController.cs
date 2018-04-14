using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoosbalRanker.Dto;
using FoosbalRanker.Models;
using FoosbalRanker.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FoosbalRanker.Controllers
{
    [Produces("application/json")]
    [Route("api/Auction")]
    [Authorize]
    public class AuctionController : Controller
    {
        UserManager<ApplicationUser> _userManager;
        IAuctionService _auctionService;
        public AuctionController(IAuctionService auctionService, UserManager<ApplicationUser> userManager)
        {
            _auctionService = auctionService;
            _userManager = userManager;
        }

        /// <summary>
        /// Get all non expired and non completed auctions.
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<AuctionItemDto>> GetAll()
        {
            var auctions= await _auctionService.GetAuctions();
            var user = await _userManager.GetUserAsync(this.User);
            var auctionDtos=auctions.Select(auctionModel => ConvertAuctionToDto(auctionModel, user));
            return auctionDtos;
        }

        /// <summary>
        /// Get auction by it's ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var auctionModel = _auctionService.GetAuctionById(id);
            var user = await _userManager.GetUserAsync(this.User);
            if (auctionModel == null)
                return NotFound();
            else
                return Json( ConvertAuctionToDto(auctionModel, user));
        }

        /// <summary>
        /// Add new Bid
        /// </summary>
        /// <param name="id"></param>
        /// <param name="bid"></param>
        /// <returns></returns>
        [Route("bid/{id}")]
        [HttpPost]
        public async Task<IActionResult> AddBid(int id,[FromBody] BidBindingModel bid)
        {

            //return Json(new { success = false, message = "You cannot bid" });
            var user=await _userManager.GetUserAsync(this.User);
            var auction = _auctionService.GetAuctionById(id);
            if (bid==null || !ModelState.IsValid || bid.BidAmount<1)
            {
                return Json(new { success = false, message = "Invalid bid amount" });
            }

            if (auction.AuctionEndDate >= DateTime.Now)
            {
                var bidItem = new Bid() { AuctionId = auction.Id, AuctionItem = auction, BidDate = DateTime.Now, User = user, UserId = user.Id, BidAmount = bid.BidAmount };
                _auctionService.AddBid(bidItem);
                return Json(new { success = true });
                
            }
            else
            {
                return Json(new { success = false,message="Auction has expired" });
            }
            
        }
        

        private AuctionItemDto ConvertAuctionToDto(AuctionItem model,ApplicationUser user)
        {
            return new AuctionItemDto
            {
                Id = model.Id,
                Title = model.Title,
                Description = model.Description,
                AuctionEndDate = model.AuctionEndDate,
                CreatedDateFormat = model.CreatedDate.ToShortTimeString(),
                CanBid =model.Bids!=null? !model.AuctionCompletedDate.HasValue && model.Bids.All(m=>m.UserId!= user.Id):true,
                HighestBid=model.Bids!=null && model.Bids.Any()?model.Bids.Max(m=>m.BidAmount):0
            };
        }
    }
}