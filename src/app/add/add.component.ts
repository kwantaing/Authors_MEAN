import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _httpService: HttpService,private _router: Router) { }
  newAuthor: any;

  ngOnInit() {
    this.newAuthor = {name : ""}
  }
  
  onCreate(){
    let Observable = this._httpService.addAuthor(this.newAuthor);
    Observable.subscribe(data => {
      console.log("Got data from post back:",data)
    })
    this.newAuthor = {name: ""}
    this.goHome();
  }

  goHome(){
    this._router.navigate(['/'])
  }

}
