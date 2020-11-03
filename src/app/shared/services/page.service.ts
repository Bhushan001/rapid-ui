import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PageService {

  constructor(
    private http: HttpClient) {
  }

  public getAllPages(): Observable<any> {
    let url = 'http://localhost:8080/pages/list';
    return this.http.get(url).map((res) => res);
  }
}
