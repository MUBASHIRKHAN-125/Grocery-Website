const order =() => {
   document.querySelector(".but").innerHTML = `<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
   </div>`
   alert("SELECT YOUR GROCERY ITEM...");
   window.location.href="item.html";
}


