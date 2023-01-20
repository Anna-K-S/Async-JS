// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => {
//   console.log(response);
//   return response.json();
// })
// .then(posts => console.log(posts))
// .catch(err => console.log(err));
//fetch по умолчаю делает get запрос

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => resolve(post))
    .catch(err => reject(err));
   
  });
}

getPost(1)
.then(post => console.log(post)); 

function getPost2(id) {
  const [userType, userId] = id.split('-');
  return fetch (`https://jsonplaceholder.typicode.com/posts/${userId}`)
  .then(response => response.json(),
  );
}

getPost2('user-1')
.then(post => console.log(post))
.catch(err => console.log(err));


function getPost3(id) {
  return Promise.resolve().then(() => {
    const [userType, userId] = id.split('-');
  return fetch (`https://jsonplaceholder.typicode.com/posts/${userId}`)
  .then(response => response.json(),
  ); 
  });
}

getPost3(1)
.then(post => console.log(post))
.catch(err => console.log(err));


try {
  const response = await fetch('flowers.jpg');
  if (!response.ok) {
  throw new Error('Ответ сети был не ok.');
  }
  const myBlob = await response.blob();
  const objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
  } catch (error) {
  console.log('Возникла проблема с вашим fetch запросом: ', error.message);
  }

console.log(myHeaders.has("Content-Type")); // true
console.log(myHeaders.has("Set-Cookie")); // false
myHeaders.set("Content-Type", "text/html");
myHeaders.append("X-Custom-Header", "AnotherValue");

console.log(myHeaders.get("Content-Length")); // 11
console.log(myHeaders.get("X-Custom-Header")); // ["ProcessThisImmediately", "AnotherValue"]

myHeaders.delete("X-Custom-Header");
console.log(myHeaders.get("X-Custom-Header")); // [ ]