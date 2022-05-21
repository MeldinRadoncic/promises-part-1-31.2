
let url = 'http://numbersapi.com'
let p = document.querySelector('p');
let favNum = 8;

// // 1.
 axios.get(`${url}/${favNum}?json`).then(res => {
     console.log(res.data);
 })
    

// 2.
let favNums = [8,5,4,12]
axios.get(`${url}/${favNums}?json`).then(res => {
    console.log(res.data);
})


// / 3.

Promise.all(
    Array.from({ length: 4 }, () => {
      return axios.get(`${url}/${favNum}?json`);
    })
  ).then(fact => {
    fact.forEach(data => p.innerText=`${data.text}`)}
  );