const textareaEl = document.getElementById("textarea");
const totalCounterEL = document.getElementById("total-counter")
const remainingCounterEL = document.getElementById("remaining-counter")

textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
});

function updateCounter(){
    totalCounterEL.innerText = textareaEl.value.length;
    remainingCounterEL.innerText = textareaEl.getAttribute("maxLength") - 
    textareaEl.value.length;
}