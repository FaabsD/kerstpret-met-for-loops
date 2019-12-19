let images = [
    "images/dorpje-staand.jpg",
    "images/bulldog.jpg",
    "images/boom.jpg",
    "images/kaars.jpg",
    "images/kado.jpg",
    "images/kadootjes.jpg",
    "images/kerstballen.jpg",
    "images/lichtjes.jpg",
    "images/sneeuw.jpg",
    "images/sterretjes-staand.jpg"
];
let main = document.getElementById('container');

for(let i=0; i<images.length; i++){

    main.innerHTML += "<img src="+images[i]+" class='kerst"+[i]+"' alt='Kerstafbeelding"+[i]+"'/>" 
}





