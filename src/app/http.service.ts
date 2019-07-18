import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  addAuthor(newAuthor){
    console.log(newAuthor);
    return this._http.post('/authors', newAuthor);
  }

  getAuthors(){
    return this._http.get('/authors');
  }
  deleteAuthor(id){
    return this._http.delete(`/authors/${id}`);
  }
}
