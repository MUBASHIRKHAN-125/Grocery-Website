const MessageSend = () => {
    (function(){
       emailjs.init({
         publicKey: "Ql5XR0NamqOZmaaX3",
       });
    })();
 
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userAddress = document.querySelector("#Addres").value;
    let userMessage =document.querySelector("#message").value; 
    let userCont =document.querySelector("#tell").value; 
 
    if(!userEmail , !userMessage ,!userName ,!userAddress , !userCont){
       alert("PLEASE FILL INPUT");
       return;
     }
     let objectCon = {
        userName:userName,
        email: userEmail,
        contactNumber: userCont,
        userAddress: userAddress,
        message: userMessage,
      }
    
      emailjs.send("service_e4j4fue" , "template_tf36zko" , objectCon)
      .then((response) => {
    alert("ORDER COMPLETE");
    console.log(response);
    window.location.href="index.html";
      })
      .catch( (error) => {
    console.log(error);
      })
    }
    
    const Refresh = () => {
      document.getElementById("name").value = "";
      document.getElementById("email").value ="";
      document.querySelector("#Addres").value = ""; 
      document.querySelector("#message").value = "";
      document.querySelector("#tell").value = "";
    }
  
 