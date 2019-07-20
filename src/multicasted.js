var Rx = require('rxjs/Rx')

// var source = Rx.Observable.interval(500);
// var subject = new Rx.Subject();
// var multicasted = source.multicast(subject);
// var subscription1, subscription2, subscriptionConnect;
//
// subscription1 = multicasted.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// // 这里我们应该调用 `connect()`，因为 `multicasted` 的第一个
// // 订阅者关心消费值
// subscriptionConnect = multicasted.connect();
//
// setTimeout(() => {
//   subscription2 = multicasted.subscribe({
//     next: (v) => console.log('observerB: ' + v)
//   });
// }, 600);
//
// setTimeout(() => {
//   subscription1.unsubscribe();
// }, 1200);
//
// // 这里我们应该取消共享的 Observable 执行的订阅，
// // 因为此后 `multicasted` 将不再有订阅者
// setTimeout(() => {
//   subscription2.unsubscribe();
//   subscriptionConnect.unsubscribe(); // 用于共享的 Observable 执行
// }, 2000);

// 使用refCount

var source = Rx.Observable.interval(500);
var subject = new Rx.Subject();
var refCounted = source.multicast(subject).refCount();
var subscription1, subscription2, subscriptionConnect;

// 这里其实调用了 `connect()`，
// 因为 `refCounted` 有了第一个订阅者
console.log('observerA subscribed');
subscription1 = refCounted.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

setTimeout(() => {
  console.log('observerB subscribed');
  subscription2 = refCounted.subscribe({
    next: (v) => console.log('observerB: ' + v)
  });
}, 600);

setTimeout(() => {
  console.log('observerA unsubscribed');
  subscription1.unsubscribe();
}, 1200);

// 这里共享的 Observable 执行会停止，
// 因为此后 `refCounted` 将不再有订阅者
setTimeout(() => {
  console.log('observerB unsubscribed');
  subscription2.unsubscribe();
}, 2000);
