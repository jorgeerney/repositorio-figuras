function circulo(){
    let figura=document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("circulo"); /*agrega y quita la clase con cada click*/
}

function rectangulo(){
    let figura=document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("rectangulo"); /*agrega y quita la clase con cada click*/
}

function degradado(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("degrade");
}

function gif(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("animacion");
}

function mTop(){
    const figura=document.querySelector("#figura");
    // const figura=document.querySelector(".figura");
    figura.classList.toggle("mtop");
}

function mDown(){
    const figura=document.querySelector("#figura");
    figura.classList.toggle("mdown");
}

function mLefth(){
    const figura=document.querySelector("#figura");
    figura.classList.toggle("mlefth");
}

function mRigth(){
    const figura=document.querySelector("#figura");
    figura.classList.toggle("mrigth");
}

function mDiag(){
    const figura=document.querySelector("#figura");
    figura.classList.toggle("mdiagonal")
}

function animation(){
    const figura=document.querySelector("#figura");
    figura.classList.toggle("animation");
}

function mpanel(){
    // const uno=document.getElementsByClassName("panel");
    const uno=document.querySelector(".panel");
    uno.classList.toggle("moverPanel");
}

function modal_login(){
    const modal=document.querySelector("#modal");
    modal.classList.toggle("active");
}