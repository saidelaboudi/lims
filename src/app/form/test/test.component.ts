import { Component, OnInit } from '@angular/core';
import { SampletypeService } from 'src/app/service/sampletype/sampletype.service';
import { TestService } from 'src/app/service/test/test.service';
import { UnitService } from 'src/app/service/unit/unit.service';

@Component({
    selector: 'test-form',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestForm implements OnInit {
    units: any[] = []
    types: any[] = []

    constructor(private testService: TestService,
        private unitService: UnitService,
        private sampleTypeServices: SampletypeService,
    ) { }

    ngOnInit(): void {
        this.unitService.getAllUnits().subscribe(res => {
            this.units = res
        })
        this.sampleTypeServices.getAllSampleTypes().subscribe(
            res => {
                this.types = res
            }
        )
    }

    form: any = {
        "id": -22137624,
        "name": "",
        "description": "",
        "available": false,
        "price": 0,
        "samples": []
    };

    sample: any = {
        "id": -60404993,
        "type": {},
        "productionDate": "1962-06-23",
        "receptionDate": "1966-07-03",
        "expirationDate": "1985-10-07",
        "measureValue": 0,
        "employeeResultInterpretation": "",
        "adminResultInterpretation": "",
        "lotNumber": 0,
        "progress": 0,
        "confirme": false,
        "conform": false,
        "cost": 0,
        "minTimeFrame": 0,
        "maxTimeFrame": 0,
        "unit": {
            "id": -73219656,
            "name": "enim"
        },
        "container": {
            "id": -32038091,
            "name": "",
            "description": ""
        }
    }



    onSubmit() {
        this.testService.save(this.form)
        this.form = {
            "id": -22137624,
            "name": "",
            "description": "",
            "available": false,
            "price": 0,
            "samples": []
        };
    }
    addSample() {
        this.form.samples.push(this.sample)
        this.sample={
            "id": -60404993,
            "type": {},
            "productionDate": "1962-06-23",
            "receptionDate": "1966-07-03",
            "expirationDate": "1985-10-07",
            "measureValue": 0,
            "employeeResultInterpretation": "",
            "adminResultInterpretation": "",
            "lotNumber": 0,
            "progress": 0,
            "confirme": false,
            "conform": false,
            "cost": 0,
            "minTimeFrame": 0,
            "maxTimeFrame": 0,
            "unit": {
                "id": -73219656,
                "name": "enim"
            },
            "container": {
                "id": -32038091,
                "name": "",
                "description": ""
            }
        }
    }
}
