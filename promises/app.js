const promise = new Promise((resolve, reject) => {
  //'resolve' - вызызвается в случае успешно выполненной операции 
  //'reject' - в случае не успешно выполненной операции 
  setTimeout(() => resolve(Math.random()), 2000);
});

console.log(promise);
promise.then(x => {console.log(x)
return x;
})
.then(y => console.log(y));

//then = Promise

promise.then(z => console.log(z));

//в 'resolve/reject' передается один агрумент

//Errors

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('error'), 3000);
});

promise2
.then(a => {console.log(m) //!
return a;
})
.then(b => console.log(b))
.catch(err => console.log(err));


/* A promise is in one of these states:
pending - initial state, neither fulfilled nor rejected
fulfilled - meaning that the operation was completed successfully
rejected - meaning that the operation failed */