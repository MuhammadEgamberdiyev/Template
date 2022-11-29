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