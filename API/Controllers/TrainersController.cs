using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using App.Models.Trainers;
using App.TrainerRequests;
using Azure.Core;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using API.Identity;

namespace API.Controllers
{
    [Route("api/trainers")]
    [ApiController]
    public class TrainersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IdentityContext  _identityContext;
        private readonly SignInManager<CustomUser> _signInManager;

        public TrainersController(SignInManager<CustomUser> signInManager, ApplicationDbContext context, IdentityContext identityContext)
        {
            _context = context;    
            _identityContext = identityContext;
            _signInManager = signInManager;
        }


        [HttpGet]

        public ActionResult<IEnumerable<Trainer>> GetSpecifiedTrainers([FromQuery] GetTrainersRequest request)
        {         
            var Trainers = _context.Trainers
                .Where(x => x.DisciplinesIds.Contains(request.DisciplineId) || x.CityOfWork.Contains(request.City)
                || x.FirstName == request.FirstName || x.LastName == request.LastName).ToList();


            return Ok(Trainers);
        }

        [HttpPost]

        public ActionResult CreateTrainer([FromBody] CreateTrainersRequest request)
        {
            

            var trainer = new Trainer
            {
                UserId = "6",
                CityOfWork = request.City,
                FirstName = request.FirstName,
                LastName = request.LastName,
                isRemoteAllowed = request.isRemoteAllowed,
                DisciplinesIds = JsonConvert.SerializeObject(request.DisciplinesIds)    
            };
            _context.Trainers.Add(trainer);
            _context.SaveChanges();
            return Ok();
        }

    }
}
