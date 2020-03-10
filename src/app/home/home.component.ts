import { PageService } from './../shared/services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public pages : Array<any> = [];

  constructor(
    private _pageService: PageService
  ) { }

  ngOnInit() {
    this._pageService.getAllPages().subscribe(
      (res) => {
        this.pages=res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
