import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/service/test/test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  tests:any[] = []
  constructor(private testServices : TestService) { }

  ngOnInit(): void {
    this.testServices.getAllTests().subscribe(res => this.tests=res)
  }

  delete(id:Number){
    console.log(id)
    this.testServices.delete(id)
  }

}
