
// Анимации

let moreAnimateStart = gsap.timeline({paused: true});
let moreAnimateBack = gsap.timeline({paused: true});

moreAnimateStart.fromTo(".more_btn", {y: "0%"} ,{y: "1%"})           
                .fromTo(".animate", {y: "0", rotationX: "0"} ,{y: "0", rotationX: "180"}, "-=1")
                .fromTo(".expandable", {x: "100%", y: "-10%", opacity: "0"}, {x: "0", y: "0", opacity: "1", duration: "1"});

moreAnimateBack.fromTo(".expandable", {x: "100%", y: "-10%", opacity: "0"}, {x: "0", y: "0", opacity: "1", duration: "1"})
               .fromTo(".animate", {y: "0", rotationX: "0"} ,{y: "0", rotationX: "0"}, "-=1")
               .fromTo(".more_btn", {y: "0%"} ,{y: "1%"});




$(document).ready( function(){
    let hiddenContent = $(".expandable");
    $(".more_btn").click(function(){
        hiddenContent.toggleClass("hidden");
        if(hiddenContent.is(":visible")){
            moreAnimateStart.play();
        }
        else{
            moreAnimateBack.play();
        }
    });
    $(".burger_btn").click(function(){
        $(".header_list_new").toggleClass("hidden");
        $(".header_burger").toggleClass("active");
    });
});