// Change Dark-Light Mode
const changeMode = ()=>{
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "main.css"){
        theme.href = "dark-mode.css";
        //console.log("Modo noche")
    }else{
        theme.href = "main.css"
        //console.log("Modo dia")
    }
}