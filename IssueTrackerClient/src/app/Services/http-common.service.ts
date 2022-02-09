import {  Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { SessionStorage} from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class HttpCommonService {

  @SessionStorage('EncodedAuthentication')
  public EncodedAuthentication: String = '';
  constructor(private http: HttpClient) {

  }

  get(apiURL: string): Observable<any> {
    const options = {
        headers: this.generateHeaders()
    }
    console.log('API Call');
    console.log(options.headers);    
    return this.http.get(apiURL, options)
      .pipe(
          map(res => res),
          catchError(e => {return throwError(() => e);}),
      )
      
  }

  post(data: any, apiURL: string): Observable<any> {
    const options = {
        headers: this.generateHeaders()
    }

    return this.http.post(apiURL, { data }, options)
      .pipe(
          map(res => res),
          catchError(e => {return throwError(() => e);}),
      );
  }

  put(data: any, apiURL: string): Observable<any> {
    const options = {
        headers: this.generateHeaders()
    }
    return this.http.put(apiURL, data, options)
      .pipe(
          map(res => res),
          catchError(e => {return throwError(() => e);}),
      );
  }

    patch(data: any, apiURL: string): Observable<any> {
        const options = {
            headers: this.generateHeaders()
        }

    return this.http.patch(apiURL, data, options)
    .pipe(
        map(res => res),
        catchError(e => {return throwError(() => e);}),
    );
  }

  private generateHeaders(): any {

    let headers = new HttpHeaders()
   .set('Content-Type', 'application/json')
   .set('Access-Control-Allow-Origin', '*')
   .set('Accept','application/json' )
   .set('Authorization','Basic '+this.EncodedAuthentication)
   .set('X-MachineKey','XAMARIN_TEST')
    return headers;
  }

}
