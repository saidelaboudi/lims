import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jsPDF } from 'jspdf';
import { Subscription } from 'rxjs';
import { TestService } from 'src/app/service/test/test.service';
import { TypeService } from 'src/app/service/type/type.service';
import { UnitService } from 'src/app/service/unit/unit.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestUpdate implements OnInit {

  form: any = {}
  types:any[]= []
  units:any[]= []
  id = 0;
  paramsSubscription!: Subscription;
  test: any = {}
  constructor(private route: ActivatedRoute, private testService: TestService,private typeService:TypeService,private unitService:UnitService) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.testService.get(this.id).subscribe(res => this.form = res)
    this.typeService.getAllSampleTypes().subscribe(res=>this.types)
    this.unitService.getAllUnits().subscribe(res=>this.units=res)
  }
  update(sample:any){
    console.log(sample)
  }
  onSubmit(){
    this.testService.save(this.form)
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
  
}
