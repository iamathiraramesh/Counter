 const counter=document.getElementById('counter')
 

 let counterValue=0;
function Updatedisplay(){
    counter.textContent=counterValue
}
 function incClick(increment){
    counterValue+=1;
    Updatedisplay();
 }
 function decClick(decrement){
    counterValue-=1;
    Updatedisplay();
 }
 function resetclick(reset){
    counterValue=0;
    Updatedisplay();
 }
 Updatedisplay();