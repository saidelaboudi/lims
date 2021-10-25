import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TestService } from 'src/app/service/test/test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class Test implements OnInit {
  id = 0;
  paramsSubscription!: Subscription;
  test: any = {}
  constructor(private route: ActivatedRoute, private testService: TestService) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.testService.get(this.id).subscribe(res => {
      this.test = res
      console.log(res)
    })
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}