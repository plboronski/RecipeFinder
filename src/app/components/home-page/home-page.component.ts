import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  beans: number[] = [0];
  constructor() { }

  ngOnInit(): void {
    
  }

  Beans() {
    for(let i=0; i<100; i++) {
      this.beans.push(i);
    }
  }

}
