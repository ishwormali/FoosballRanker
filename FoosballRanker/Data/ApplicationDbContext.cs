using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using FoosbalRanker.Models;
using FoosballRanker.Models;

namespace FoosbalRanker.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Match> Matches { get; set; }
        
        public DbSet<Participant> Participants { get; set; }

        public DbSet<MatchParticipant> MatchParticipants { get; set; }

        
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
