import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() points: number;
  @Input() column: number;

  @Output()
  public removeCardItem: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
   
  }


  addPoints(){
    this.points+=1;
  }

  removeCard(){
    console.log(this.id);
    this.removeCardItem.emit(this.id);
  }
}
