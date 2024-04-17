using API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/disciplines")]
    [ApiController]
    public class DisciplinesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public DisciplinesController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]

        public ActionResult GetDisciplines()
        {
            var response = _context.Disciplines.ToList();
            return Ok(response);
        }
    }
}
