import { interval, Observable, Subject, timer } from "rxjs";
import { scan, map, take, share } from "rxjs/operators";

let numbers = interval(1000).pipe(take(2));
numbers.subscribe({
  next : (value) => {
    console.log(value);
  }})
;



/*     interface IMessagesOperation {
      (messages: number[]): number[];
    }
    
    const initialMessages: number[] = [];
    //let newMessages: Subject<number> = new Subject<number>();
    let messages: Observable<number[]>;
    let updates: Subject<IMessagesOperation> = new Subject<any>();

    let create: Subject<number> = new Subject<number>();
    messages = updates
      .pipe(
        // Get the array of the numbers coming in.
        scan((total: number[], operation: IMessagesOperation, index: number) => {
          let msgs = operation(total);
          console.log(msgs);
          return msgs;
        }, initialMessages),
      )

    create.pipe(map(function (message: number): IMessagesOperation {
      return function (messages: number[]) {
        return messages.concat(message);
      };
    }))
    .subscribe(updates);


    const source = interval(1000).pipe(take(4), share({
      resetOnRefCountZero: () => timer(200),
      resetOnComplete: () => timer(100),
      resetOnError: false
    }));
    source.subscribe({
      next: (value) => {
        console.log("Working");
        create.next(value)
      }
    });
    messages.subscribe(value => {
      console.log("working")
    });
 */


// const source$ = interval(1000).pipe(take(4));

// async function getTotal() {
//   let total = 0;

//   await source$.forEach(value => {
//     total += value;
//     console.log('observable -> ', value);
//   });

//   return total;
// }

// getTotal().then(
//   total => console.log('Total:', total)
// )

// const angelMowersPromise = new Promise<string>((resolve, reject) => {
//   // a resolved promise after certain hours
//   setTimeout(() => {
//     resolve('We finished mowing the lawn')
//   }, 100000) // resolves after 100,000ms
//   reject("We couldn't mow the lawn")
// })

// const api =  'http://dummy.restapiexample.com/api/v1/employees'
//    fetch(api)
//     .then(response => response.json())
//     .then(employees => employees.forEach(employee => console.log(employee.id)) // logs all employee id
//     .catch(error => console.log(error.message))) // logs any error from the promise



// const start = (callback : any) => {
//   setTimeout(() => {
//     callback('Hello');
//     setTimeout(() => {
//       callback('And Welcome');
//       setTimeout(() => {
//         callback('To Async Await Using TypeScript');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };
// start((text: any) => console.log(text));


/# Learning promisses */
/* async function promise1(timeout_0 : number) {
  let promise = new Promise((res, rej) => {
    setTimeout(() => res("Now promise1 is done!"), timeout_0*10)
  });

  // wait until the promise returns us a value
  let result = await promise;

  // "Now it's done!"
  //alert(result);
  console.log(result)
};
async function promise2(timeout_1 : number) {
  let promise = new Promise((res, rej) => {
    setTimeout(() => res("Now promise2 is done!"), timeout_1*10)
  });

  // wait until the promise returns us a value
  let result = await promise;

  // "Now it's done!"
  //alert(result);
  console.log(result)
};

async function sequence() {
  await promise1(500); // Wait 50ms…
  
  await promise2(500); // …then wait another 50ms.
  return "done!";
}
sequence(); */