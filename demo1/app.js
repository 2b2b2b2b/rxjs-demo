import Rx from 'rxjs/Rx';
Rx.Observable
	.fromEvent(document.body, 'click') // 註冊監聽
    .take(1)
	.subscribe(console.log);
