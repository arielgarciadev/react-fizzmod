let xhr = new XMLHttpRequest;

xhr.addEventListener("readystatechange", () => {
    console.log(`Nuevo estado ${xhr.readyState}`);  
})

xhr.addEventListener("load", () => {
    if(xhr.status == 200){
        console.log(xhr.response);
    }    
})

xhr.open("GET", "info.txt");

xhr.send()