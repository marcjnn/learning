window.onload = init();

/*
1. function init available from start - it sets the "onclick" function
2. declare the onclick function */ 

function init() {
    // document.getElementById("zero").setAttribute("src", ) try to figure it out later
    // let image = document.getElementById("zero");
    let images = document.getElementsByTagName('img');
    console.log(images);
    for (i = 0; i < images.length; i++) {
    images[i].onclick = changeImage;
    }
};

function changeImage(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = name + '.jpg';
    image.src = name;
    setTimeout(reblur, 2000, image)
};

function reblur(image) {
    var name = image.id;
    name = name + "blur.jpg";
    image.src = name;
}