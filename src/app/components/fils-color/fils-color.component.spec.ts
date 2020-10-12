import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilsColorComponent } from './fils-color.component';

describe('FilsColorComponent', () => {
  let component: FilsColorComponent;
  let fixture: ComponentFixture<FilsColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilsColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilsColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
