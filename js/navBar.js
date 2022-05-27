let buttonMain = document.getElementById("button-menu");
let nav = document.getElementById("nav");

if(buttonMain){
    //al hacer click en el boton se cambia la clase para mostrar los span que simulan la cruz de cierre
    buttonMain.addEventListener("click", () =>{
        buttonMain.classList.toggle("close");
        nav.classList.toggle("show");
    })
}

if(nav){
    //al hacer click fuera del navBar se debe cerrar el menu
    nav.addEventListener("click", e =>{
        if(e.target.id === "nav"){
            nav.classList.remove("show");
            buttonMain.classList.remove("close");
        }
    })
}