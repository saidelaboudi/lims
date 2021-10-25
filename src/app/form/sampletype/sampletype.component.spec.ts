import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampletypeComponent } from './sampletype.component';

describe('SampletypeComponent', () => {
  let component: SampletypeComponent;
  let fixture: ComponentFixture<SampletypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampletypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampletypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
