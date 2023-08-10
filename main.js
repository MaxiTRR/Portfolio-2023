//Change Dark-Light Mode without a another css file
//Get the :root element
let root = document.querySelector(":root")
let mode = true

const btnMode = document.getElementById("btnMode")

btnMode.addEventListener("click", ()=>{
    if (mode === true){
        mode = false
        root.style.setProperty("--bg-color-dark", "#f0e1e1")
        root.style.setProperty("--font-color-primary", "w241c1c")
    }else{
        mode = true
        root.style.setProperty("--bg-color-dark", "#221D1D")
        root.style.setProperty("--font-color-primary", "#ffff")
    }
})

//Intersection Oberserver for scroll animation
const hiddenElements = document.querySelectorAll(".hidden")

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle("show", entry.isIntersecting);
        console.log(entry)
    })
},{
    rootMargin: "-100px 0px 0px 0px",
})

hiddenElements.forEach((el)=>{
    observer.observe(el)
})