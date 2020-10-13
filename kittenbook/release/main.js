/* var projectName = "kittenbook";
var versionNumber = "0.0.1";
*/
var currentDate = new Date();
var currentTime = currentDate.getFullYear() + '-' +
            (currentDate.getMonth() + 1) + '-' +
            currentDate.getDate() + ' at ' + 
            currentDate.getHours() + ':' + 
            currentDate.getMinutes() + ':' + 
            currentDate.getSeconds();


var kbValues = {
    projectName: 'kittenbook',
    versionNumber: '0.0.1',
    currentTime: currentTime
};

function getUserName() {
    var userName = prompt('Hello, what\'s your name?');

    if(!userName) {
    userName = prompt('You didn\'t enter a name. Really, what\'s your name?');
}
return userName;
}
/* document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' +
                '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + 
                ' accessed on: ' + kbValues.currentTime + '</p>'; */

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
function main() {
    // var userName = getUserName();
    // var images = getImages();

    setInterval(function() {
        // images = getImages();
        replaceImages();
    }, 3000);
}

main();