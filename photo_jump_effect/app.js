let imgArr = ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1628911774602-74a0cfee9b0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwcm9kdWN0fGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1522273500616-6b4757e4c184?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxwcm9kdWN0fGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1609900179119-3ed9f4530eb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxwcm9kdWN0fGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxwcm9kdWN0fGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1588449668365-d15e397f6787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxwcm9kdWN0fGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1588449668365-d15e397f6787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxwcm9kdWN0fGVufDB8fDB8fHww",
]

const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
              return func(...args);
        }
    }
}
let t1= gsap.timeline();
t1.from("#nav h1,#nav h3",{
    delay:1,
    opacity:0,
    y:"-150%",
    stagger:.4
})

t1.from(".box h1",{
    x:"-10%",
    stagger:.2,
    opacity:0
})




let imagejump = ()=>{
    document.querySelector(".box").addEventListener("mousemove", throttleFunction((dets) => {
        let div = document.createElement("div");
        div.classList.add("imgbox");
        document.querySelector(".container").appendChild(div);
    
        gsap.to(div,{
            top: dets.y-div.getBoundingClientRect().height,
            left:dets.x - div.getBoundingClientRect().width/2,
            duration:0
        })

        setTimeout(()=>{
            div.remove()
        },1500)
    
        
        let image = document.createElement("img");
        image.setAttribute("src",imgArr[Math.round(Math.random()*(imgArr.length-1))])
        div.appendChild(image);

        let tl = gsap.timeline();
        tl.to(image,{
            y:0,
            duration:.5,
            ease: "power1.out"
        })
        tl.to(image,{
            y:"100%",
            duration:0.5,
            ease: "power1.in"
            
        })
    
    
    
    }, 250));
    
}
imagejump();