import { Component , Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  @Input() title = 'EDGARDO LUGO BLANCO';

  constructor() {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {

  }
}
