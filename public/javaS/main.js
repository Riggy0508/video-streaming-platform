import * as store from "./store.js"
import * as wss from "./wss.js"

//Here we are initializtion the SOcketID Connection
const socket = io('/');
wss.registerSocketEvents(socket)



//Register event for personal code copy button
const personalCodeCopyButton=document.getElementById("personal_code_copy_button") 
personalCodeCopyButton.addEventListener('click',()=>{
  const personalCode=store.getState().socketId
  navigator.clipboard && navigator.clipboard.writeText(personalCode)
})


//register event listeners for connection buttons

const personalCodeChatButton=document.getElementById("personal_code_chat_button")

const personalCodeVideoButton=document.getElementById("personal_code_video_button")

personalCodeChatButton.addEventListener('click', ()=>{
  console.log("chat Button Clicked")
})

personalCodeVideoButton.addEventListener('click', ()=>{
  console.log("Video Button Clicked")
})