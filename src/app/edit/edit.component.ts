import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _HttpService : HttpService, private _router : Router, private _route : ActivatedRoute) { }

  author: any;
  ngOnInit() {
  }
  loadinfo(id){
    this._route.snapshot.data.get(id);
  }



}
