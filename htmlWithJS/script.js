var authors = document.getElementsByClassName('author');
for(var i=0; i < authors.length; i++) {
    var element = authors[i];
    console.log(element.innerHTML);
    element.innerHTML = 'Lekhok-' + (i+1);
    element.style.backgroundColor = 'lightblue';
}