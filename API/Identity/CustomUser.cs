using Microsoft.AspNetCore.Identity;

namespace API.Identity
{
    public class CustomUser : IdentityUser
    {
        public string FirstName { get; set; }   
        public string LastName { get; set; }

        public bool isTrainer {  get; set; }
    }
}
