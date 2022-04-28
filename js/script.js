const menuBtn = document.querySelector("#menuBtn")
const navItems = document.querySelector("#navItems")
const allEl = document.querySelector("#allEl")
const items = document.querySelectorAll(".item")
const headerNav = document.querySelector("#headerNav")
let meter = 0


function openMenuFn(){
    if(window.innerWidth < 1200){
        navItems.classList.toggle("sm") 
        items.forEach(function(e){
            e.addEventListener("click",function(){
                navItems.classList.remove("sm")
                allEl.classList.remove("hide")    
            })
        })
        allEl.classList.toggle("hide")
        // console.log("dupa");
    }else if(window.innerWidth > 1200 && window.innerWidth < 2500){
        navItems.classList.toggle("md")
        items.forEach(function(e){
            e.addEventListener("click",function(){
                navItems.classList.remove("md")
                allEl.classList.remove("hide")    
            })
        })
    }else if(window.innerWidth > 2500){
        navItems.classList.toggle("lg")
        items.forEach(function(e){
            e.addEventListener("click",function(){
                navItems.classList.remove("lg")
                allEl.classList.remove("hide")    
            })
        })
    }
}

function resizeFn(){
    if(navItems.classList.contains("sm")){
        navItems.classList.remove("sm")
        allEl.classList.remove("hide")   
    }
    else if(navItems.classList.contains("md")){
        navItems.classList.remove("md")
    }
    else if(navItems.classList.contains("lg")){
        navItems.classList.remove("lg")
    }
}

function scrollFn(){
    if(window.innerWidth > 1200 && window.innerWidth < 2500){
        let meter2 = window.innerHeight - 200
        let meter3 = meter2 + 500
        let meter4 = meter3 + 600
        if(window.scrollY > meter2 && window.scrollY < meter3){
            // console.log("dupa");
            headerNav.classList.add("dark-nav")
        }
        else if(window.scrollY > meter4){
            headerNav.classList.add("dark-nav")
        }
        else{
            headerNav.classList.remove("dark-nav")
        }
    }
}

document.addEventListener("scroll", scrollFn)
menuBtn.addEventListener("click", openMenuFn)
window.addEventListener("resize", resizeFn)
window.addEventListener("resize", scrollFn)