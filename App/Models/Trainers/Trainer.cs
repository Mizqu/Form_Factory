using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Models.Trainers
{
    public class Trainer
    {
        [Key]
        public string UserId { get; set; }
        [PersonalData]
        public string CityOfWork { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool isRemoteAllowed { get; set; }
        public string DisciplinesIds { get; set; }

        public float Rate { get; set; } = 0;

        [MaxLength(300)]

        public string ? Bio { get; set; }
    }
}
