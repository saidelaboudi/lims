import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  units = []
  constructor(private httpClient: HttpClient) { }
  save(form: any) {
    this.httpClient.post(API + '/units/', form).subscribe(res => console.log(res))
  }

  getAllUnits() : Observable<[]> {
    return this.httpClient.get<any>(API + '/units/all')
  }

  delete(id: Number) {
    this.httpClient.delete(API + '/units/' + id + '/delete')
  }

  update(form: any) {
    this.httpClient.put(API + '/units/update', form)
  }
}
