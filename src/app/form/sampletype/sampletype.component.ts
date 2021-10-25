import { Component, OnInit } from '@angular/core';
import { SampletypeService } from 'src/app/service/sampletype/sampletype.service';
import { UnitService } from 'src/app/service/unit/unit.service';

@Component({
  selector: 'sampletype',
  templateUrl: './sampletype.component.html',
  styleUrls: ['./sampletype.component.css']
})
export class SampletypeComponent implements OnInit {

  constructor(private sampletypeService:SampletypeService,private unitService:UnitService) { }

  form : any = {};

  units:any[] = []
  
  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(res=>this.units=res)
  }

  onSubmit(){
    this.sampletypeService.save(this.form)
    this.form = {}
  }

}
