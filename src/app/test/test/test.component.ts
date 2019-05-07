import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  messageToComponent : string = "Hello dude this from test component";
  constructor() { }

  ngOnInit() {
  }

}
