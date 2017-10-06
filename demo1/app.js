import Rx from 'rxjs/Rx';
// Rx.Observable
// 	.fromEvent(document.body, 'click') // 註冊監聽
//     .take(1)
// 	.subscribe(console.log);




var observable = Rx.Observable
	.create(function(observer) {
		observer.next('Jerry'); // RxJS 4.x 以前的版本用 onNext
		observer.next('Anna');
	})

// 訂閱這個 observable
observable.subscribe(function(value) {
	console.log(value);
})
