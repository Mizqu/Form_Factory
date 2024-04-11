using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using App.Models.Trainers;
using App.TrainerRequests;
using Azure.Core;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace API.Controllers
{
    [Route("api/trainers")]
    [ApiController]
    public class TrainersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IdentityContext  _identityContext;

        public TrainersController(ApplicationDbContext context, IdentityContext identityContext)
        {
            _context = context;    
            _identityContext = identityContext;
        }


        [HttpGet]

        public ActionResult<IEnumerable<Trainer>> GetSpecifiedTrainers([FromQuery] GetTrainersRequest request)
        {
            /*HashSet<Trainer> Trainers = new HashSet<Trainer>();
            foreach (Trainer trainer in _context.Trainers.Where(x => x.DisciplinesIds.Contains(request.DisciplineId)))
            {
                if (request.City is not null && trainer.CityOfWork == request.City)  // filter through city
                {
                    Trainers.Add(trainer);
                }
                if (request.FirstName is not null && !Trainers.Contains(trainer)) // filter through FirstName
                {
                    var user = _identityContext.Users.Where(x => x.isTrainer == true).FirstOrDefault(x => x.Id == trainer.UserId);
                    if (user is not null && user.FirstName == request.FirstName)
                    {
                        Trainers.Add(trainer);
                    }
                }
                if (request.LastName is not null && !Trainers.Contains(trainer)) // filter through LastName
                {
                    var user = _identityContext.Users.Where(x => x.isTrainer == true).FirstOrDefault(x => x.Id == trainer.UserId);
                    if (user is not null && user.LastName == request.LastName)
                    {
                        Trainers.Add(trainer);
                    }
                }
                if (!Trainers.Contains(trainer)) // if user have chosen only discipline add every entity of the iteration set as filtering has already been made in foreach loop
                {
                    Trainers.Add(trainer);
                }
            }*/
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
