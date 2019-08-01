let btn = document.getElementById("boton");

btn.addEventListener("click", e => {

    e.preventDefault();

    let div = document.createElement("div");
    document.body.appendChild(div);

    let p = document.createElement("p");
    p.innerText = "¿Esta seguro que quiere abandonar la página?";
    div.appendChild(p);

    let btn1 = document.createElement("button");
    div.appendChild(btn1);
    btn1.innerText = "Aceptar";

    btn1.addEventListener("click", e => {
        window.location = btn.href;
    })

    let btn2 = document.createElement("button");
    div.appendChild(btn2);
    btn2.innerText = "Cancelar";

    btn2.addEventListener("click", e => {
        btn.style.display = "block";
        div.style.display = "none";
    })

    btn.style.display = "none";

});