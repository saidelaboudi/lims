import { Component, OnInit } from '@angular/core';
import { SampletypeService } from 'src/app/service/sampletype/sampletype.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  data: any = {
    sampleTypes: []
  }
  constructor(private sampleTypeServices: SampletypeService) { }

  ngOnInit(): void {
    this.data.sampleTypes=this.sampleTypeServices.getAllSampleTypes()
    this.data.sampleTypes.forEach((res:any)=>this.data.sampleTypes.push(res))
    console.log(this.data.sampleTypes)
  }

}