/*Цель функций async/await упростить использование promises синхронно и воспроизвести некоторое действие над группой Promises. Точно так же как Promises подобны структурированным колбэкам, async/await подобна комбинации генераторов и promises. */


// function getPost(id) {
//   return Promise.resolve().then(() => {
//     const[userType, userId] = id.split('-');
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(response => response.json(),
//     );
//   });
// }

async function getPost(id) {
const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

const data = await response.json();
return data;
}


getPost(1).then(data => console.log(data))
.catch(err => console.log(err));
//async always returns 'promise'

async function getPost2(id) {
 const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res.json());
  
return response;
  
}


async function getPost3(id) {
  try {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
   return response;
  }catch(err) {
    console.log(err);
    return Promise.reject(err);
  } 
}
       
 getPost3 (1)
 .then(data => console.log(data))
 .catch(err => console.log(err));


 async function getPost4(id) {
  try {
   const response1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
   const response2 = await fetch(`https://jsonplaceholder.typicode.com/users`).then(res => res.json());

   return response1, response2;
  }catch(err) {
    console.log(err);
    return Promise.reject(err);
  } 
}
     
async function getAll() {
  const [res1, res2] = await Promise.all([getPost(1), getPost3(1)]);
  console.log(res1, res2);
}

getAll();

/*The await keyword can only be used inside an async function.
The await keyword makes the function pause the execution and wait for a resolved promise before it continues. */

