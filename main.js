//Change Dark-Light Mode with a second css file
// // Change Dark-Light Mode
// const changeMode = ()=>{
//     let theme = document.getElementById("theme");

//     if (theme.getAttribute("href") == "main.css"){
//         theme.href = "dark-mode.css";
//         //console.log("Modo noche")
//     }else{
//         theme.href = "main.css"
//         //console.log("Modo dia")
//     }
// }


//Change Dark-Light Mode without a another css file
//
//Get the :root element
let root = document.querySelector(":root")
//const rootStyles = getComputedStyle(root)
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