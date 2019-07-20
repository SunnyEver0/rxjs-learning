let Rx = require('rxjs/Rx');

// stream.subscribe(fnValue, fnError, fnComplete)
// 1. fnvalue
// let stream$ = Rx.Observable.create((observer) => {
//   observer.next(1)
// });
//
// stream$.subscribe((data) => {
//   console.log('Data', data);
// });

// 2.fnError

// let stream$ = Rx.Observable.create((observer) => {
//   observer.error('error message111');
// });
//
// stream$.subscribe(
//   (data) => console.log('Data', data)),
//   (error) => console.log('1111', error)

// 3.fnComplete
// 最后是 fnComplete，当流完成时调用，并且不会再发出任何值。它是通过 observer.complete() 来触发的，像这样：

// let stream$ = Rx.Observable.create((observer) => {
//   // 多次调用 observer.next(<value>)
//   observer.complete();
// })

// 4. total case
// let stream$ = new Rx.Observable.create((observer) => {
//   let i = 0;
//   let id = setInterval(() => {
//     observer.next(i++);
//   }, 1000)
//
//   return function () {
//     clearInterval(id);
//   }
// })
//
// let subscription = stream$.subscribe((value) => {
//   console.log('Value', value)
// });
//
// // 清理observer
// setTimeout(() => {
//   subscription.unsubscribe() // 在这我们调用了清理函数
//
// }, 3000)


// let stream$ = Rx.Observable.from([1, 2, 3]);
//
// stream$.subscribe((value) => {
//   console.log('Value', value);
// });
//
// let promise = new Promise((resolve, reject) => {
//   setTimeout(()=> {
//     resolve( [1,2,3] )
//   })
// });
//
// promise.then((value) => {
//   console.log('Value', value)
// });


// let liveStreaming$ = Rx.Observable.interval(1000).take(5);
//
// liveStreaming$.subscribe(
//   data => console.log('subscriber from first minute', data),
//   err => console.log(err),
//   () => console.log('completed')
// )
//
// setTimeout(() => {
//   liveStreaming$.subscribe(
//     data => console.log('subscriber from 2nd minute', data),
//     err => console.log(err),
//     () => console.log('completed')
//   )
// }, 2000)


// let publisher$ = Rx.Observable
//   .interval(1000)
//   .take(5)
//   .publish();
//
//
// publisher$.subscribe(
//   data => console.log('subscriber from first minute', data),
//   err => console.log(err),
//   () => console.log('completed')
// )
//
// setTimeout(() => {
//   publisher$.subscribe(
//     data => console.log('subscriber from 2nd minute', data),
//     err => console.log(err),
//     () => console.log('completed')
//   )
// }, 3000)
//
//
// publisher$.connect();


