import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService,private _router : Router) { }

  authors : any;


  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
    let Observable = this._httpService.getAuthors();
    Observable.subscribe(data => {
      console.log("Data from getAuthors:",data)
      this.authors = data;
    })
  }
  
  delete(id){
    let Observable = this._httpService.deleteAuthor(id);
    Observable.subscribe(data => {
      console.log("Deleted: ");
    })
    this.getAuthors();
  }
  
  onEdit(id){
    console.log(id);
    this._router.navigate(['/edit'],id);
  }
  

  }
