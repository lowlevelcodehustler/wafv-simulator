var imageUrls = [
 './static/250x250px_grey.png',
 './static/250x250px_black.png'
];

var img = document.getElementById('image');
img.addEventListener("click", function() {
    this.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
});
