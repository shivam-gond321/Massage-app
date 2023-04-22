const messageInput = document.getElementById("massage-input");

messageInput.addEventListener("keydown",function(event){
    if(event.key=="Enter")
    getmassage()
})


function getmassage() {
  document.getElementById("massage-output").innerHTML =
    messageInput.value;
  messageInput.value = " ";
} 
