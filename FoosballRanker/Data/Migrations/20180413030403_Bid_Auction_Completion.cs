using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace FoosbalRanker.Data.Migrations
{
    public partial class Bid_Auction_Completion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "AwardedDate",
                table: "Bids",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "BidAmount",
                table: "Bids",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<DateTime>(
                name: "AuctionCompletedDate",
                table: "AuctionItems",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "BidAmount",
                table: "AuctionItems",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AwardedDate",
                table: "Bids");

            migrationBuilder.DropColumn(
                name: "BidAmount",
                table: "Bids");

            migrationBuilder.DropColumn(
                name: "AuctionCompletedDate",
                table: "AuctionItems");

            migrationBuilder.DropColumn(
                name: "BidAmount",
                table: "AuctionItems");
        }
    }
}
