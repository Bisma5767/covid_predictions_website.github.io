const Confirmed_Cases = document.getElementById('Confirmed_Cases');
Confirmed_Cases.addEventListener('blur', ()=>{
    console.log("name is blurred");

let regex = /[0-9]/;
let str = Confirmed_Cases.value;
if(regex.test(str)){
    console.log('Your name is valid');
    Confirmed_Cases.classList.remove('is-invalid');
}
else{
    console.log('Your name is not valid');
    Confirmed_Cases.classList.add('is-invalid');
    
}
})


const Deaths_Cases = document.getElementById('Deaths_Cases');
Deaths_Cases.addEventListener('blur', ()=>{
    console.log("name is blurred");

let regex = /[0-9]/;
let str =  Deaths_Cases.value;
if(regex.test(str)){
    console.log('Your name is valid');
    Deaths_Cases.classList.remove('is-invalid');
}
else{
    console.log('Your name is not valid');
    Deaths_Cases.classList.add('is-invalid');
    
}
})



const Recovered_Cases = document.getElementById('Recovered_Cases');
Recovered_Cases.addEventListener('blur', ()=>{
    console.log("name is blurred");

let regex = /[0-9]/;
let str = Recovered_Cases.value;
if(regex.test(str)){
    console.log('Your name is valid');
    Recovered_Cases.classList.remove('is-invalid');
}
else{
    console.log('Your name is not valid');
    Recovered_Cases.classList.add('is-invalid');
    
}
})



const City = document.getElementById('City');
City.addEventListener('blur', ()=>{
    console.log("name is blurred");

let regex = /[a-zA-z]/;
let str = City.value;
if(regex.test(str)){
    console.log('Your name is valid');
    City.classList.remove('is-invalid');
}
else{
    console.log('Your name is not valid');
    City.classList.add('is-invalid');
    
}
})



const Province = document.getElementById('Province');
Province.addEventListener('blur', ()=>{
    console.log("name is blurred");

let regex = /[A-Za-z]/;
let str = Province.value;
if(regex.test(str)){
    console.log('Your name is valid');
    Province.classList.remove('is-invalid');
}
else{
    console.log('Your name is not valid');
    Province.classList.add('is-invalid');
    
}
})

const Travel_history = document.getElementById('Travel_history');
Travel_history.addEventListener('blur', ()=>{
    console.log("name is blurred");

let regex = /[A-Za-z]/;
let str = Travel_history.value;
if(regex.test(str)){
    console.log('Your name is valid');
    Travel_history.classList.remove('is-invalid');
}
else{
    console.log('Your name is not valid');
    Travel_history.classList.add('is-invalid');
    
}
})

document.getElementById("go back").addEventListener("click", myFunction4);

function myFunction4() {
 window.location.href="./index.html";
}