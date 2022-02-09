using System.Collections.Generic;
using IssueTrackerServer.Models;
using Microsoft.AspNetCore.Mvc;

namespace IssueTrackerServer.Controllers
{
    [Route("api/login")]
    [ApiController]
    public class IssueTrackerController : ControllerBase
    {
        public IssueTrackerController()
        {
            
        }

        [HttpGet]
        public ActionResult <Login> Login()
        {
            return new JsonResult(new List<object>()
            {
                new {username="Aishwarya",password="p"}

            });
        }

        [HttpGet("issues")]
        public ActionResult <IEnumerable<Issue>> GetAllIssues()
        {
            return new JsonResult(new List<object>()
            {
                new {IssueNumber="1",IssueName="Login",Description="Login issue",Impact="Severity 2",Owner="Aishwarya",Action="Provide a workaround until fixed",DueDate="21/03/2022"},
                new {IssueNumber="2",IssueName="Create",Description="Create issue",Impact="Severity 3",Owner="Vyshakh",Action="Immediate fix",DueDate="21/03/2022"}

            });
        }
    }
}