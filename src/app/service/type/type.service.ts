import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  constructor(private httpClient: HttpClient) { }

  save(form: any) {
    this.httpClient.post(API +'/sampleTypes/all',form)
  }

  getAllSampleTypes() : Observable<any> {
    return this.httpClient.get(API);
  }
  
  delete(id:Number){
    this.httpClient.delete(API + '/sampleTypes/'+ id + '/delete')
  }

  update(form : any){
    this.httpClient.put(API +'/sampleTypes/all',form)
  }
}
