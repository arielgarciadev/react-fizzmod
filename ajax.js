Array.from(document.getElementsByClassName("links")).forEach(function (item) {
    item.addEventListener("click", e => {
        e.preventDefault();
        ajax(e.target.href)
    })
});

function ajax(params) {
    let xhr = new XMLHttpRequest

    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            let main = document.getElementsByTagName("main")[0];
            main.innerHTML = xhr.response;
        }
    })
    
    xhr.open("get", params);

    xhr.send()
}