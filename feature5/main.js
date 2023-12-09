let createspan = ()=>{
    document.querySelectorAll('.reveal').forEach((e)=>{
        let parent  = document.createElement('span');
        parent.classList.add('parent');
    
        let child  = document.createElement('span');
        child.classList.add('child');
        
        child.innerHTML = e.innerHTML;
        e.innerHTML = "";
        parent.appendChild(child);
        e.appendChild(parent);
    })
}
createspan();

let first = document.querySelector(".first");
let second = document.querySelector(".second");

let t1 = gsap.timeline();
t1.from('.child',{
    opacity:0,
    x:'-100%',
    duration:.6,
    stagger:.2
})

let tl = gsap.timeline({scrollTrigger:{
    trigger:".container",
    top:'0% 0%',
    end:'100% 0%',
    scrub:5,
    pin:true
}})


tl.to(".first",{
    top:"-45%",
},'a')

tl.to(".second",{
    top:"0%",
},'a')