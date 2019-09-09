import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  userCacheData: any = [];
  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get('http://localhost:5000/api/v1/todos');
}

addData(data) {
  return this.http.post('http://localhost:5000/api/v1/todos',data);
}

deleteData(index) {
  return this.http.delete(`http://localhost:5000/api/v1/todos/${index}`);
}

update(index, body) {
  return this.http.put(`http://localhost:5000/api/v1/todos/${index}`, body)
}

setData(data) {
  if(data) {
    this.userCacheData = data;
  }
  
}

getid() : Observable<any> {
  return of(this.userCacheData);
}

}
