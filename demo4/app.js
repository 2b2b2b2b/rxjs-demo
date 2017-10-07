import './style.less'
import Rx from 'rxjs/Rx';


const addButton = document.getElementById('addButton');
const minusButton = document.getElementById('minusButton');
const state = document.getElementById('state');

const addClick = Rx.Observable.fromEvent(addButton, 'click').mapTo(1);
const minusClick = Rx.Observable.fromEvent(minusButton, 'click').mapTo(-1);


const numberState = Rx.Observable.empty()
  .startWith(0)
  .merge(addClick, minusClick)
  .scan((origin, next) => origin + next, 0)

numberState
  .subscribe({
    next: (value) => { state.innerHTML = value;},
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
  });
