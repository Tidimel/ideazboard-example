import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {

  public show = false;
  public cardName: string;

  @Input() id: number;

  @Output()
  public addCardItem: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  public addCard(){
    this.addCardItem.emit({
     name:this.cardName, column:this.id
    });

    this.cardName = '';
    this.show = false;
  }

  public showAdd(){
    this.show = true;
  }

}
