var cartLink=document.querySelector(".button-buy"),cartPopup=document.querySelector(".modal-cart"),cartClose=cartPopup.querySelector(".modal-close");cartLink.addEventListener("click",function(a){a.preventDefault(),cartPopup.classList.add("modal-show")}),cartClose.addEventListener("click",function(a){a.preventDefault(),cartPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&(a.preventDefault(),cartPopup.classList.contains("modal-show")&&cartPopup.classList.remove("modal-show"))});var link=document.querySelector(".form-feedback"),popup=document.querySelector(".write-us"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),login=popup.querySelector("[name=full-name]"),email=popup.querySelector("[name=email]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(err){isStorageSupport=!1}link&&link.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("modal-show"),storage?(login.value=storage,email.focus()):login.focus()}),close&&close.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form&&form.addEventListener("submit",function(a){login.value&&email.value?isStorageSupport&&localStorage.setItem("login",login.value):(a.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&(a.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});var mapLink=document.querySelector(".contacts-map"),mapPopup=document.querySelector(".modal-map"),mapClose=mapPopup.querySelector(".modal-close");mapLink.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&(a.preventDefault(),mapPopup.classList.contains("modal-show")&&mapPopup.classList.remove("modal-show"))});