import {PageService} from './../shared/services/page.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {
  public pages: Array<any> = [];

  constructor(
    private _pageService: PageService
  ) {
  }

  ngOnInit() {
    this.getAllPages();
  }

  getAllPages() {
    this._pageService.getAllPages().subscribe(
      (pages) => {
        this.pages = pages;
        console.log(pages);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Completed');
      },
    );
  }

}
