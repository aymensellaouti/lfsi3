import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PereColorComponent } from './pere-color.component';

describe('PereColorComponent', () => {
  let component: PereColorComponent;
  let fixture: ComponentFixture<PereColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PereColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PereColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
