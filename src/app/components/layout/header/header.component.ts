import { Component, OnInit} from '@angular/core';
import { trigger,state,style,transition,animation,keyframes, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  styles: [''],

})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;

  constructor() { }
  
  ngOnInit() {

  }

}
