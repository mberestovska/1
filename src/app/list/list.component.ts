import { Component, OnInit,
  OnChanges,
  SimpleChanges,
  // DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  AfterViewChecked,
  AfterViewInit
} from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,
OnChanges,
// DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy  {

  // @Input() listItem: {name: string, amount: number};
  shoppingList = [{name: 'apple', amount: 3}, {name: 'milk', amount: 1}];
  // element: {name: string, amount: number};
  // name = '';
  // amount: number;
  listDisplayed = false;

  constructor() {
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('OnInit called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChange called!');
    console.log(changes);
  }

  // ngDoCheck() {
  //   console.log('DoCheck called!');
  // }

  ngAfterContentInit() {
    console.log('AfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit called!');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('OnDestroy called!');
  }

  onDisplayList() {
    this.listDisplayed = !this.listDisplayed;
    console.log(this.listDisplayed);
  }
}
