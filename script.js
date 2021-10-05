/*Fill your code */
/*var ingredients={
    chocolate = 300,
    strawberry= 100,
    butterscotch=200,
    vanilla=250,
    redvelvet = 350,

}*/


/*var state = {
    chocolate: true,
    strawberry: true,
    butterscotch: true,
    vanilla: true,
    redvelvet: true
  };


function render() {
    renderChocolate();
    renderStrawberry();
    renderButterscotch();
    renderVanilla();
    renderRedvelvet();
    renderBuy();
    renderIngredientsBoard();
    renderPrice();
  }


  function renderChocolate() {
    let chocolate = document.querySelector("#chocolate");
    //you can also use getElementById
    if (state.chocolate) {
      chocolate.style.display = "inherit";
    } else {
      chocolate.style.display = "none";
    }
  }

  document.querySelector(".btn-chocolate").onclick = function () {
    state.chocolate = !state.chocolate;
    render();
  };

*/
  
let chocolate;
let strawberry;
let butterscotch;
let vanilla;
let redvelvet;

function render() {
renderChocolate();
renderStrawberry();
renderButterscotch();
renderVanilla();
renderRedvelvet();
renderBuy();
renderIngredientsBoard();
renderPrice();
}

function renderChocolate() 
{
//let chocolate = document.getElementsByClassName("btn-chocolate");
//you can also use getElementById
if (chocolate==1) {
  document.getElementById("layer1").style.display="inherit";
        return chocolate=0;
    } 
else {
  document.getElementById("layer1").style.display="none";
        return chocolate=1;
   }
}


function renderStrawberry() 
{
//let chocolate = document.getElementsByClassName("btn-chocolate");
//you can also use getElementById
if (strawberry==1) {
  document.getElementById("layer2").style.display="inherit";
        return strawberry=0;
    } 
else {
  document.getElementById("layer2").style.display="none";
        return strawberry=1;
   }
}

function renderButterscotch() 
{
//let chocolate = document.getElementsByClassName("btn-chocolate");
//you can also use getElementById
if (butterscotch==1) {
  document.getElementById("layer3").style.display="inherit";
        return butterscotch=0;
    } 
else {
  document.getElementById("layer3").style.display="none";
        return butterscotch=1;
   }
}

function renderVanilla() 
{
//let chocolate = document.getElementsByClassName("btn-chocolate");
//you can also use getElementById
if (vanilla==1) {
  document.getElementById("layer4").style.display="inherit";
        return vanilla=0;
    } 
else {
  document.getElementById("layer4").style.display="none";
        return vanilla=1;
   }
}
function renderRedvelvet() 
{
//let chocolate = document.getElementsByClassName("btn-chocolate");
//you can also use getElementById
if (redvelvet==1) {
  document.getElementById("layer5").style.display="inherit";
        return redvelvet=0;
    } 
else {
  document.getElementById("layer5").style.display="none";
        return redvelvet=1;
   }
}
