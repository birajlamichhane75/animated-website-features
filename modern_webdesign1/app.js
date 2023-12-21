// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();


let tl = gsap.timeline();

tl.from("#nav a,#nav h5",{
    delay:.5,
    duration:1,
    y:"-200%",
    stagger:.2,
    opacity:0,
    ease:Expo.easeOut,
})

tl.from("#text .overlay h1",{
    opacity:0,
    duration:.7,
    y:"100%",
    ease:Power4,
    stagger:.1
})
tl.from("#text p",{
    opacity:0,
    duration:.5,
    x:"-10%",
    ease:Power4,

})
tl.from("#lower-text h3",{
    opacity:0,
    duration:.5,
    x:"-5%",
    stagger:.1,
    ease:Power2,
})
tl.from("#footer h4",{
    opacity:0,
    duration:.5,
    y:"20%",
    stagger:.1,
    ease:Power2,
})

gsap.from("#elem1 h1",{
    y:"70%",
    opacity:0,
    scrollTrigger:{
        trigger:"#elem1 h1",
        scroller:"body",
        start:"50% 97%",
        start:"50% 97%",
    }
})
gsap.from("#elem2 h1",{
    y:"70%",
    opacity:0,
    scrollTrigger:{
        trigger:"#elem2 h1",
        scroller:"body",
        start:"50% 97%",
        start:"50% 97%",
    }
})
gsap.from("#elem3 h1",{
    y:"70%",
    opacity:0,
    scrollTrigger:{
        trigger:"#elem3 h1",
        scroller:"body",
        start:"50% 97%",
        start:"50% 97%",
    }
})

let imageCursor = () =>{
    document.querySelectorAll(".elem").forEach((elem)=>{

        let rot = 0;
        let diffrot = 0;
        elem.addEventListener("mousemove",(dets)=>{
            let diff = dets.clientY - elem.getBoundingClientRect().top;
            diffrot = dets.x - rot;
            rot = dets.x;
            console.log(diffrot)

            
            gsap.to(elem.querySelector("img"),{
                opacity:1,
                ease:Power1,
                top:`diff-50%`,
                left:dets.x - 50,
                rotate:gsap.utils.clamp(-20,20,diffrot)
                
            })
        })
        elem.addEventListener("mouseleave",(dets)=>{
            
            gsap.to(elem.querySelector("img"),{
                opacity:0,
             
                
            })
        })
    })
}

imageCursor();