import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/service/test/test.service';

@Component({
  selector: 'sample-form',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleForm implements OnInit {

  constructor(private testService:TestService) { }

  form: any = {
    "id": -60404993,
    "type": {
      "id": -98965548,
      "name": "esse",
      "description": "qui Ut dolor ut",
      "minVolume": 24547928.375740916,
      "measurment": -90881597.67531723,
      "stabilityInfo": "qui magna Excepteur aliqua",
      "unit": {
        "id": 93314510,
        "name": "exercitation ullamco consectetur"
      }
    },
    "productionDate": "1962-06-23T09:08:36.632Z",
    "receptionDate": "1966-07-03T03:56:35.439Z",
    "expirationDate": "1985-10-07T00:00:36.415Z",
    "measureValue": 52463549.98362887,
    "employeeResultInterpretation": "ipsum labore",
    "adminResultInterpretation": "Duis voluptate",
    "lotNumber": 41203433,
    "progress": -76203533.7642434,
    "confirme": false,
    "conform": false,
    "cost": 71762677.06170502,
    "minTimeFrame": 81238374,
    "maxTimeFrame": 96736314,
    "unit": {
      "id": -73219656,
      "name": "enim"
    },
    "container": {
      "id": -32038091,
      "name": "eu ut",
      "description": "Excepteur in Ut"
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.testService.addSample(this.form)
    this.form = {}
  }

}
