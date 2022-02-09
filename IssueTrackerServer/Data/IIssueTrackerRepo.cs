using System.Collections.Generic;
using IssueTrackerServer.Models;

namespace IssueTrackerServer.Data
{
    public interface IIssueTrackerRepo
    {
        Login Login();
        IEnumerable<Issue> GetAllIssues();
    }
}
