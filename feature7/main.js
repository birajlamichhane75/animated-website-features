let tl = gsap.timeline({scrollTrigger:{
    trigger:"#page2",
    start:"45% 50%",
    end:"50% 10%",
    pin:true,
    scrub:2
}})

tl.to(".image",{
    transform: "translate(-50%) rotateX(0deg)",
    filter: "blur(0px)",
    top:"20%"
})