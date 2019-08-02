let xhr = new XMLHttpRequest;

xhr.addEventListener("readystatechange", () => {
    console.log(`Nuevo estado ${xhr.readyState}`)
} )

xhr.open("GET", "info.txt");

xhr.send()