import { Component, OnInit } from '@angular/core';
import { TestHttpService } from '../test-http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  constructor(private testHttpSetvice: TestHttpService) {}

  ngOnInit(): void {
      this.testHttpSetvice.getData().subscribe((infos) => {
        console.log(infos);
      });
  }
}
