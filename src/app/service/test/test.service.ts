import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  

  constructor(private httpClient: HttpClient) { }

  save(form: any) {
    console.log(form)
    this.httpClient.post(API +'/tests/',form).subscribe(res => console.log(res))
  }

  getAllTests() : Observable<any> {
    return this.httpClient.get(API + '/tests/all');
  }
  get(id: Number) : Observable<any> {
    return this.httpClient.get(API + '/tests/' + id + '/')
  }
  delete(id:Number){
    console.log(id)
    this.httpClient.delete(API + '/tests/'+ id + '/delete').subscribe(res=>console.log(res))
  }

  update(form : any){
    this.httpClient.put(API +'/tests/update',form)
  }
}
