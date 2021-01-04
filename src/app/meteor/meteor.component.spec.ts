import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorComponent } from './meteor.component';

describe('MeteorComponent', () => {
  let component: MeteorComponent;
  let fixture: ComponentFixture<MeteorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
