import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  private headers = new HttpHeaders();
  constructor(private http: HttpClient,) { }

  public makeAuthorizedPostRequest(url: string, payload: any): Observable<any> {
    return this.http
      .post(url, payload, { headers: this.headers.set('Authorization','') }).pipe(tap(_ => console.log("request completed")),
        catchError(err => {
          return throwError(err);
        }));
  }

  public makeAuthorizedGetRequest(url: any): Observable<any> {
    this.headers = this.headers
    return this.http
      .get(url, { headers: this.headers.set('jwt', 'pyt32yf41ab0870gftrt89a27624dbe8d62Tre5465c345da56d3f325c3aret453we') }).pipe(tap(_ => console.log("request completed")),
        catchError(err => {
          return throwError(err);
        }));
  }

  /* 
  * Get Methods
  */
  public makeAuthorizedRequest(url: string, showLoader: boolean = true): Observable<any> {
    this.headers = this.headers
    return this.http
      .get(url, { headers: this.headers.set('jwt', 'pyt32yf41ab0870gftrt89a27624dbe8d62Tre5465c345da56d3f325c3aret453we') }).pipe(tap(_ => console.log("request completed")),
        catchError(err => {
          return throwError(err);
        }));
  }    
  

  public makeGetRequestForStringResponse(url: string): Observable<any> {
    
    return this.http
      .get(url, { responseType: 'text' }).pipe(tap(_ => console.log()),
        catchError(err => {
          
          return throwError(err);
        }));
  }

  public makeGetRequestWithParams(url: any, payload: any): Observable<any> {
    var query = "";
    var params = payload;
    for (var key in params) {
      query += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";
    }
    query = query.substring(0, query.length - 1);
    url += "?" + query;
    return this.makeAuthorizedGetRequest(url);
  }

  makeGetRequestWithHeader(url: any,): any {
    
    this.headers = this.headers
    return this.http
      .get(url, { }).pipe(tap(),
        catchError(err => {
          
          return throwError(err);
        }));
  }

 

//   makePostRequestWithHeaders(url: any, payload, headers): Observable<any> {
   
//     this.headers = this.headers
//     return this.http
//       .post(url, payload, { headers: headers }).pipe(tap(_ => this.spinner.hide()),
//         catchError(err => {
          
//           return throwError(err);
//         }));
//   }

//   makePostRequestWithOptions(url: any, payload, options): any {
//     this.spinner.show();
//     this.headers = this.headers
//     return this.http
//       .post(url, payload, options).pipe(tap(_ => this.spinner.hide()),
//         catchError(err => {
//           this.spinner.hide();
//           return throwError(err);
//         }));
//   }

//   /* 
//   * Post Methods
//   */
//   private makePostRequest(url: string, payload: any): Observable<any> {
//     this.spinner.show();
//     return this.http
//       .post(url, payload,).pipe(tap(_ => this.spinner.hide()),
//         catchError(err => {
//           this.spinner.hide();
//           return throwError(err);
//         }));
//   }

//   makePostRequestWithHeader(url: any, payload, headerKey, headerValue): any {
//     this.spinner.show();
//     this.headers = this.headers
//     return this.http
//       .post(url, payload, { headers: this.headers.set(headerKey, headerValue) }).pipe(tap(_ => this.spinner.hide()),
//         catchError(err => {
//           this.spinner.hide();
//           return throwError(err);
//         }));
//   }

//   public makeFormPostRequest(url: string, payload: any): Observable<any> {
//     this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
//     let input = new FormData();
//     var params = payload;
//     for (var key in params) {
//       input.append(key, params[key]);
//     }
//     return this.makePostRequest(url, input);
//   }

//   public makeJsonPostRequest(url: string, payload: any): Observable<any> {
//     this.headers.append('Content-Type', 'application/json')
//     return this.makePostRequest(url, payload);
//   }

//   /* 
//   * Put Methods
//   */
//   private makePutRequest(url: string, payload: any): Observable<any> {
//     this.spinner.show();
//     return this.http
//       .put(url, payload,).pipe(tap(_ => this.spinner.hide()),
//         catchError(err => {
//           this.spinner.hide();
//           return throwError(err);
//         }));
//   }

//   public makeJsonPutRequest(url: string, payload: any): Observable<any> {
//     this.headers.append('Content-Type', 'application/json')
//     return this.makePutRequest(url, payload);
//   }
}