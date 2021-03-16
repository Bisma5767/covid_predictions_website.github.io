let myVideo = document.getElementById("video1"); 
function PlayPause() 
{ 
  if (myVideo.paused) 
     myVideo.play(); 
  else 
     myVideo.pause(); 
}

let myVideo2 = document.getElementById("video2"); 
function PlayPause1() 
{ 
  if (myVideo2.paused) 
     myVideo2.play(); 
  else 
     myVideo2.pause(); 
}
let myVideo3 = document.getElementById("video3"); 
function PlayPause2() 
{ 
  if (myVideo3.paused) 
     myVideo3.play(); 
  else 
     myVideo3.pause(); 
}
let myVideo4 = document.getElementById("video4"); 
function PlayPause3() 
{ 
  if (myVideo4.paused) 
     myVideo4.play(); 
  else 
     myVideo4.pause(); 
}
document.getElementById("first").addEventListener("click", myFunction);
function myFunction() {
   window.location.href = "history.html";
}

document.getElementById("second").addEventListener("click", myFunction2);
function myFunction2() {
   window.location.href = "https://public.tableau.com/profile/bisma1509#!/vizhome/Book1_16153903964540/Dashboard1?publish=yes";
}

document.getElementById("third").addEventListener("click", myFunction3);
function myFunction3() {
   window.location.href = "index2.html";
}

document.getElementById("fourth").addEventListener("click", myFunction4);
function myFunction4() {
   window.location.href = "prevention.html";
}

document.getElementById("fifth").addEventListener("click", myFunction5);
function myFunction5() {
   window.location.href = "symptoms.html";
}
