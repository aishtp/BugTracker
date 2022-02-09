import { SessionStorage } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
// import { JsonConvert } from 'json2typescript';
import { HttpCommonService } from './http-common.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticatorService {

  @SessionStorage('Authenticated')
  Authenticated: boolean = false;


  constructor(private httpCommonService: HttpCommonService, private router: Router) {

  }
  /**
   * Logs out a user
   */
  public Logout(): void {
    this.Authenticated = false;
  }

  /**
   * Performs Login with user name and password
   * @param username
   * @param password
   */
  public Login(username: string, password: string): Observable<any> {
    let toBeEncoded: string = username + ':' + password;
    this.httpCommonService.EncodedAuthentication = btoa(toBeEncoded);

    let isSuccess: boolean = false;
    return new Observable((authObs) => {

      let apiUrl = 'http://localhost:5000/api/login';
      this.httpCommonService.get(apiUrl).subscribe(
        (response: any) => {
          try {

            if (response[0].password == password) {
              isSuccess = true;
              this.Authenticated = true;
            } else {
              isSuccess = false;
            }
            authObs.next(isSuccess);
            authObs.complete();
          }
          catch (error) {
            authObs.error(error);
            authObs.complete();
          }

        },
        (error: any) => {
          authObs.error(error);
          authObs.complete();
        }
      );
    });

  }

  /**
   * Determines if authentication has occured or not
   */
  public IsAuthenticated(): boolean {
    if (this.Authenticated) {
      return true;
    } else {
      return false;
    }
  }


}
