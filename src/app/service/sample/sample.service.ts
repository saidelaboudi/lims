import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  constructor(private httpClient: HttpClient) { }

  getAllSampleTypes() : Observable<any> {
    return this.httpClient.get(API + '/samples/all');
  }

  update(form : any){
    this.httpClient.put(API +'/samples/',form)
  }


}
