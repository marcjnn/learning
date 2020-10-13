// var images = document.querySelectorAll('div.userContentWrapper img');

/* for ( var i=0; i <images.length; i++ ) {
    console.log(images[i].src);
}
*/

function getImageHeight(image) {
    return image.height;
}

function getImageWidth(image) {
    return image.width;
}

function replaceImages() {
    // var baseImageUrl, height, width, image;
    var images = document.querySelectorAll('div.userContentWrapper img');
    var baseImageUrl = 'http://placekitten.com/g/';

for ( var i=0, len=images.length; i<len; i++ ) {
    var image = images[i];
    var height = getImageHeight(image);
    var width = getImageWidth(image);
    image.src = baseImageUrl + width +'/' + height;
    console.log(images[i].src);
}
}