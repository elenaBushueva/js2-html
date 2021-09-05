console.log('---JS---');

const subTitles = document.getElementsByClassName('sub-title')
console.log(subTitles);

const idOne = document.getElementById('one')
console.log(idOne.innerText);

const titles = document.getElementsByTagName('h2')
console.log(titles);
for(let i = 0; i < titles.length; i++){
    console.log(titles[i]);
}
const arr = Array.from(titles);
console.log(arr);


let i = 5;
function plusOne(){
    console.log(++i)
}
function minusOne(){
    console.log(--i)
}