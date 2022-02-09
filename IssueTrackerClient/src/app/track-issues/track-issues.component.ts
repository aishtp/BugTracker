import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticatorService } from '../Services/authenticator.service';
import { HttpCommonService } from '../Services/http-common.service';

@Component({
  selector: 'app-track-issues',
  templateUrl: './track-issues.component.html',
  styleUrls: ['./track-issues.component.css']
})
export class TrackIssuesComponent implements OnInit {
  issue: Issue = new Issue;
  data : any;
  constructor(private httpCommonService : HttpCommonService,route:ActivatedRoute, 
    private authenticatorService : AuthenticatorService,
    private router: Router) {
    route.params.subscribe(val => {
      let apiUrl = 'http://localhost:5000/api/login/issues';
        this.httpCommonService.get(apiUrl).subscribe((response: any) => {
          if(response) 
          {
            this.data = response;
          }
            
        })
    });
   }

  ngOnInit(): void {
    
  }

  onSubmit(){
    
  }
  logOut(){
    this.authenticatorService.Logout();
    this.router.navigate(['/login']);
  }
}


export class Issue {
  issueName : string = '';
  desc : string = '';
  impact : string = '';
  owner : string = '';
  action : string = '';
  dueDate : any;
}