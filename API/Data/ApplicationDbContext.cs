using App.Models.Trainers;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Trainer> Trainers { get; set; }
        public DbSet<Discipline> Disciplines { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
    }
}
