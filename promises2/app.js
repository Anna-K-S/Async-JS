function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
const myHttp = http();

//callback hell
// myHttp.get(
//   'https://jsonplaceholder.typicode.com/posts',
//   (err, res) => {
//     if(err) {
//       console.log('error', err);
//       return;
//     }
//     myHttp.get(
//       'https://jsonplaceholder.typicode.com/users/1',
//       (err, res) => {
//         if(err) {
//           console.log('error', err);
//           return;
//         }
//         myHttp.get(
//           'https://jsonplaceholder.typicode.com/comments?posrtId=1',
//           (err,res) => {
//             if (err) {
//               console.log('error', err);
//               return;
//             }
//              console.log('end');
//           },
//         );
       
//       },
//     );
//   },
// );


function getPost (id) {
 return new Promise((resolve, reject) => myHttp.get('https://jsonplaceholder.typicode.com/posts/1', (err, res) => {
   if (err) {
    reject(err);
    }
    resolve(res);
 }));
}

function getPostCom() {
  return new Promise((resolve, reject) => myHttp.get('https://jsonplaceholder.typicode.com/comments?posrtId=1', (err, res) =>{
    if (err) {
      reject(err);
    }
    resolve(res);
 }));
}

function getUserCreatedPost() {
  return new Promise((reolve, reject) => myHttp.get('https://jsonplaceholder.typicode.com/users/1', (err, res) => {
    if(err) {
      reject(err);
    }
    reolve(err);
  }));

}
// getPost().then(post => console.log(post));


getPost()
// .then(post => console.log(post))
.then(post => getPostCom())
.then(com => getUserCreatedPost())
.then(user => console.log(user))
.catch(err => console.log(err));

