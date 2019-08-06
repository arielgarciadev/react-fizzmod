Array.from(document.getElementsByClassName("links")).forEach(function (item) {
    item.addEventListener("click", e => {
        e.preventDefault();
        ajax(e.target.href)
    })
});

function ajax(params) {    
    fetch(params)
        .then(resultado => resultado.text())
        .then(resultado => {
            document.getElementsByTagName("main")[0].innerHTML = resultado
        })
        .catch(console.error)
}