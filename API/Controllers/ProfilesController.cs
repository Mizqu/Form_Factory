using API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace API.Controllers
{
    [Route("api/profile")]
    [ApiController]
    public class ProfilesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IdentityContext _identityContext;
        public ProfilesController(ApplicationDbContext context, IdentityContext identityContext)
        {
            _context = context;
            _identityContext = identityContext;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult> GetProfile()
        {
            string UserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var user = await _identityContext.Users
            .FirstOrDefaultAsync(x => x.Id == UserId);
            switch (user.isTrainer)
            {
                case true:
                    var trainerProfile = await _context.Trainers
                        .Where(x => x.UserId == UserId)
                        .Select(x => new
                        {
                            x.FirstName,
                            x.LastName,
                            x.Bio,                                                  
                        })
                        .FirstOrDefaultAsync();
                    return Ok(trainerProfile);
                case false:
                    var profile = await _identityContext.Users
                        .Where(x => x.Id == UserId)
                        .Select(x => new
                        {
                            x.Email,
                            x.FirstName,
                            x.LastName,
                        })
                        .FirstOrDefaultAsync();
                return Ok(profile);
            }      
        }
    }
}
