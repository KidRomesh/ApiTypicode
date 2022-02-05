import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Posts } from 'src/app/Models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl:string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {
   }
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  getPosts():Observable<Posts[]>{
    return this.http.get<Posts[]>(this.postUrl)

  }


  getPost(id: number): Observable<Posts> {
    const url = `${this.postUrl}/${id}`;
    return this.http.get<Posts>(url)
  }

  update(post:Posts): Observable<any>{
    return this.http.put<Posts>(this.postUrl, post, this.httpOptions);

  }


  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  
  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);
  
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // private log(message: string) {
  //   console.log(message);
  // }
}
