import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  columnList = [
    {id:1,name:"I like it"},
    {id:2,name:"I don`t like it"},
    {id:3,name:"What can we add/improve?"},
  ];

  private cardList = [
    {id:1,name:"Good grades",points:5,column:1},
    {id:2,name:"Nice event",points:1,column:1},
    {id:3,name:"Atmosphere",points:0,column:1},
    {id:4,name:"Time to get up",points:12,column:2},
    {id:5,name:"Better information about passing",points:2,column:3}
  ]

  public filterCards(id) {
    var r = [];

    for (var i in this.cardList){
      if (this.cardList[i].column == id){
        r.push(this.cardList[i]);
      }
    }
    return r;
  }

  public removeCardItemHandler(id) {
    for (let i = 0; i < this.cardList.length; i++){
      if (this.cardList[i].id == id){
        this.cardList.splice(i, 1);
      } 
    } 
  }

  public addCardItemHandler(item) {

    var lastId = this.cardList[this.cardList.length-1].id;

    this.cardList.push({
      id: lastId+1,
      name: item.name,
      column: item.column,
      points: 0
    });
  }


}
