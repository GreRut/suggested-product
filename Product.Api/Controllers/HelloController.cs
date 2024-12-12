using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Product.Api.Controllers
{
    [ApiController, Route("api/1/[controller])")]
    public class HelloController : ControllerBase
    {
        [HttpGet]
        public string SayHello() => "Hello";
    }
}