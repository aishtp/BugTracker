using System;
using System.ComponentModel.DataAnnotations;

namespace IssueTrackerServer.Models
{
    public class Issue
    {
        [Key]
        public string IssueNumber { get;set;}

        [Required]  
        public string IssueName { get;set;}
        
        [Required]  
        public string Description { get;set;}
        
        [Required]  
        public string Impact { get;set;}
        
        [Required]  
        public string Owner { get;set;}
        
        [Required]  
        public string Action { get;set;}
        
        [Required]  
        public DateTime DueDate { get;set;}
    }
}