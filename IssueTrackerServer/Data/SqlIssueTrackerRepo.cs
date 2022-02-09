using System.Collections.Generic;
using IssueTrackerServer.Models;

namespace IssueTrackerServer.Data
{
    public class IssueTrackerRepo : IIssueTrackerRepo
    {
        public IssueTrackerRepo()
        {
            
        }

        public Login Login()
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Issue> GetAllIssues()
        {
            throw new System.NotImplementedException();
        }
    }
}