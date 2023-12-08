let tl = gsap.timeline({scrollTrigger:{
    trigger:"main",
    start:"38% 50%",
    end:"120% 50%",
    scrub:1,
    pin:true,
}})

tl
.to('.text',{
    top:"5%"
},'a')

.to('#card1 .heading',{
    width:"280px",

},'a')

.to('#card1',{
    top:"10%",
},'a')

.to('#card2',{
    top:"130%",
},'a')

.to('#card2',{
    top:"15%",
},'b')

.to('#card1 .heading',{
    width:0,
},'b')

.to('#card1',{
    scale:.8
},'b')

.to('#card2 .heading',{
    width:"250",
},'b')

.to('#card3',{
    top:"130%"
},'b')

.to('#card3',{
    top:"20%"
},'c')

.to('#card2 .heading',{
    width:0,
},'c')

.to('#card2',{
    scale:.9
},'c')

.to('#card3 .heading',{
    width:"368px",
},'c')
