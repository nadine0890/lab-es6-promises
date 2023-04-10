// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));*/



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  setTimeout(()=>{document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`}, 1000)
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 1, (step1) => {
  //document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  setTimeout(()=>{document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`}, 2000)
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 2, (step1) => {
  //document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  setTimeout(()=>{document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`}, 3000)
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 3, (step1) => {
  //document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  setTimeout(()=>{document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`}, 4000)
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 4, (step1) => {
  //document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  setTimeout(()=>{document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`}, 5000)
}, (error) => console.log(error));

setTimeout(()=>{document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`}, 6000);


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    setTimeout(()=>{document.querySelector("#steak").innerHTML += `<li>${step0}</li>`}, 1000)
  });
  obtainInstruction('steak', 1)
  .then( (step0) => {
    setTimeout(()=>{document.querySelector("#steak").innerHTML += `<li>${step0}</li>`}, 2000)
  });
  obtainInstruction('steak', 2)
  .then( (step0) => {
    setTimeout(()=>{document.querySelector("#steak").innerHTML += `<li>${step0}</li>`}, 3000)
  });
  obtainInstruction('steak', 3)
  .then( (step0) => {
    setTimeout(()=>{document.querySelector("#steak").innerHTML += `<li>${step0}</li>`}, 4000)
  });
  obtainInstruction('steak', 4)
  .then( (step0) => {
    setTimeout(()=>{document.querySelector("#steak").innerHTML += `<li>${step0}</li>`}, 5000)
  });
  obtainInstruction('steak', 5)
  .then( (step0) => {
    setTimeout(()=>{document.querySelector("#steak").innerHTML += `<li>${step0}</li>`}, 6000)
  });
  obtainInstruction('steak', 6)
  .then( (step0) => {
    setTimeout(()=>{document.querySelector("#steak").innerHTML += `<li>${step0}</li>`}, 7000)
  });
  setTimeout(()=>{document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`}, 8500);
  
// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...