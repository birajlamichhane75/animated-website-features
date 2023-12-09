let t1 = gsap.timeline({scrollTrigger:{
    trigger:"#page2",
    start:"50% 50%",
    end:"100% 0%",
    scrub:1,
    pin:true

}})

t1.to('#page2 .one',{
    scale:5,
    opacity:0,
    borderRadius:0,
    height:"100%",
    width:"100%",
    duration:2

},'a')

t1.to('#page2 .two',{
    scale:2,
    opacity:1,
    borderRadius:0,
    height:"100%",
    width:"100%"

},'a')