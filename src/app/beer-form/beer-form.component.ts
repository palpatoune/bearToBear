import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent implements OnInit {
  public show:boolean = false;



  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show;
  }






}
