import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestngIFComponent } from './testng-if.component';

describe('TestngIFComponent', () => {
  let component: TestngIFComponent;
  let fixture: ComponentFixture<TestngIFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestngIFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestngIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
