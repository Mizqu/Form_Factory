﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.TrainerRequests
{
    public class GetTrainersRequest
    {
        public string ? FirstName { get; set; }   
        public string ? LastName { get; set; }
        public string ? City { get; set; }
        public string DisciplineId { get; set; }
       
    }
}
