let buy = document.querySelector(".buy");
let back = document.querySelector(".back");

let t1 = gsap.timeline({paused:true , reversed:true});
let t2 = gsap.timeline({paused:true , reversed:true});

buy.addEventListener("click",(e)=>{
    t2.play();
}) 

back.addEventListener("click",(e)=>{
    t2.reverse();
})

t1.play();

t1.from(".nav .menu",{
    x:-100,
    ease:"elastic(1,.8)",
    duration:1.5
},0.3)

t1.from(".nav .profile",{
    x:100,
    ease:"elastic(1,.8)",
    duration:1.5
},0.3)

t1.from("#car-top",{
    opacity:0,
    y:"30%",
    ease:"elastic(1,.8)",
    duration:2.5
},0.4)

t1.from("h1",{
    opacity:0,
    y:"80%",
    ease:"elastic(1,.8)",
    duration:1.5
},0.9)

t1.from(".container p",{
    opacity:0,
    y:"80%",
    ease:"elastic(1,.8)",
    duration:1.5
},0.9)

t1.from(".buy",{
    scale:0,
    ease:"elastic(1,.8)",
    duration:1.5
},0.9)



t2.to("#car-top",{
    top:"-120%",
    ease:"elastic.inOut",
    duration:1
},0)

t2.to(".nav .menu",{
    x:-100,
   ease:"Power1.inOut",
    duration:.3
},0)

t2.to(".nav .profile",{
    x:100,
   ease:"Power1.inOut",
    duration:.3
},0)

t2.to("h1",{
   
    top:"120%",
   ease:"Power1.inOut",
    duration:.5
},0)

t2.to(".container p",{

    top:"120%",
   ease:"Power1.inOut",

},0)

t2.to(".buy i",{
    scale:0,
    ease:"Power1.inOut",
    duration:.3
},0.2)

t2.to(".buy",{
    scale:12,
    width:"100%",
    ease:"Power1.inOut",
    duration:.5,
    cursor:"auto"
},0.4)

t2.from(".back",{
    x:"-100px",
    ease:"Power1.inOut",
    duration:.2
},0.4)


t2.to("#car-side",{
 
    left:"50%",
    ease:"elastic(1,.8)",
    duration:.8
},0.6)

t2.to(".container2 h2",{
    left:"10%",
    ease:"elastic(1,.8)",
},0.6)

t2.to(".container2 p",{
    left:"10%",
    ease:"elastic(1,.8)",
},0.7)
