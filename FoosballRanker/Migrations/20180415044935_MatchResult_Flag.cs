using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace FoosballRanker.Migrations
{
    public partial class MatchResult_Flag : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsWinner",
                table: "MatchParticipants");

            migrationBuilder.AddColumn<int>(
                name: "MatchResult",
                table: "MatchParticipants",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MatchResult",
                table: "MatchParticipants");

            migrationBuilder.AddColumn<bool>(
                name: "IsWinner",
                table: "MatchParticipants",
                nullable: false,
                defaultValue: false);
        }
    }
}
