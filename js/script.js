var typed = new Typed(".typing", {
    strings:["","Web Designer", "web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


const btn = document.querySelector('.btn');
btn.onmousemove = function(e){
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
}





document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  
  document.onkeydown = function (e) {
    if (event.keyCode = 123) {
      return false;
    }
  
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
      return false;
    }
    
    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
      return false;
    }
    
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
      return false;
    }
    
    if (e.ctrlKey && e.shiftKey && e.keyCode == "U".charCodeAt(0)) {
      return false;
    }
  
  }