gsap.from(".page1 .box", {
    scale: 0,
    delay: 1,
    duration: 1,
})
gsap.from(".page2 .box", {
    scale: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2 .box",
        start: "top center",
    }
})
gsap.from(".page3 .box", {
    opacity: "0",
    duration: 1,
    x: -1000,
    scrollTrigger: {
        trigger: ".page3 .box",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
    }
})
gsap.from(".page4 .box", {
    opacity: "0",
    duration: 2,
    rotate: 720,
    x: 500,
    scrollTrigger: {
        trigger: ".page4 .box",
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        scrub: 2,
    }
})


gsap.to(".page5 h1", {
    transform: "translateX(-200%)",
    scrollTrigger: {
        trigger: ".page5",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
    }
})


// svg 

let Path = `M 10 100 Q 500 100 990 100`;
const finalPath = `M 10 100 Q 500 100 990 100`;

const main_div = document.querySelector(".svg-wrapper");

main_div.addEventListener("mousemove", (dots) => {
    Path = `M 10 100 Q ${dots.x}  ${dots.y} 990 100`;
    gsap.to(".svg-wrapper svg path", {
        duration: 0.2,
        attr: { d: Path },
        ease: "power3.out",
    })
})
main_div.addEventListener("mousemove", () => {
    gsap.to(".svg-wrapper svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
    })
})


// custom cursor
const page7 = document.querySelector(".page7");
const cusrsor = document.querySelector(".custom_cursor");
const img = document.querySelector(".img_box img")

page7.addEventListener("mousemove", function (dets) {
    gsap.to(cusrsor, {
        x: dets.x,
        y: dets.y,
        ease: "back.out(1.7)",
    })

    if(dets.target === img){
gsap.to(cusrsor, {
            scale:4,
        })
    } else {
    gsap.to(cusrsor, {
        scale:1,
    })
    }
})

// img.addEventListener("mousemove", function (e) {
    
// })
// img.addEventListener("mouseleave", function (e) {

// })