using API.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class IdentityContext : IdentityDbContext<CustomUser>
    {
        public IdentityContext(DbContextOptions<IdentityContext> options) : base(options)
        {
                
        }
    }
}
