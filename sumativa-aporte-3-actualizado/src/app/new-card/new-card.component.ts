import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
})
export class NewCardComponent  implements OnInit {

  constructor() { }

  @Input () title : string=""; 
  @Input ()  desc: string="" ;
  @Input () img : string="" 

  ngOnInit() {}

}
