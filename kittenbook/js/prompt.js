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
