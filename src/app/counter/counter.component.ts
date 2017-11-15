import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';

import { AppState} from '../../redux/app.state';
import { DecrementAction, PlustAction } from '../../redux/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter:number;

  constructor(
    private store: Store<AppState>
  ){
    this.store.select('counter')
    .subscribe((counterState) =>{
      this.counter = counterState;
      console.log('initState', counterState);
    })
  }

  ngOnInit() {
  }

  decrement(){
    const action = new DecrementAction();
    this.store.dispatch(action);
  }

  plus(){
    const action = new PlustAction(6);
    this.store.dispatch(action);
  }

}
