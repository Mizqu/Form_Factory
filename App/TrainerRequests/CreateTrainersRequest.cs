using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.TrainerRequests
{
    public class CreateTrainersRequest
    {
        public string City { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool isRemoteAllowed { get; set; }
        public List<int> DisciplinesIds { get; set; }

    }
}
