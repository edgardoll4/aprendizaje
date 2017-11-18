import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.sass']
})
export class SharedComponent implements OnInit {
  @Input() ttmenu = 'Menu';
  constructor() { }

  ngOnInit() {
  }

}
