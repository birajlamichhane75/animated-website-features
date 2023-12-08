let section = document.querySelectorAll('.section')
section.forEach((section) => {
    gsap.to(section,{
        scrollTrigger:{
            scroller:"body",
            trigger:section,
            pin:true,
            pinSpacing:false
        }
    })
});

document.querySelectorAll(".image").forEach((image)=>{
    gsap.from(image,{
        scale:0,
        scrollTrigger:{
            scroller:"body",
            trigger:image,
            scrub:true
        }
    })
})