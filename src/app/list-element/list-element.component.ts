import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddElement() {
    // this.shoppingList.push({
    //   name: this.name,
    //   amount: this.amount
    // });
 }
}
