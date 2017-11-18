import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  @Input() tt1: string;
  public tt2: string;
  public tt3: string;
  public tt4: string;
  constructor() {
    this.tt1 = 'Hause';
    this.tt2 = 'Kontakt';
    this.tt3 = 'Über ...';
    this.tt4 = 'Liebe';
   }

  ngOnInit() {
  }

}
