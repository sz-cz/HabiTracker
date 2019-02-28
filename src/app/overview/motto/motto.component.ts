import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motto',
  templateUrl: './motto.component.html',
  styleUrls: ['./motto.component.less']
})
export class MottoComponent implements OnInit {

  motto = "Kliknij, aby wprowadzić własne motto!"

  constructor() { }

  ngOnInit() {
  }

}
