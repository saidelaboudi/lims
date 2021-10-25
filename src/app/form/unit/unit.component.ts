import { Component, OnInit } from '@angular/core';
import { UnitService } from 'src/app/service/unit/unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  constructor(private unitService:UnitService) { }

  ngOnInit(): void {
  }

  form:any = {}

  onSubmit(){
    this.unitService.save(this.form)
    this.form={}
  }
}
