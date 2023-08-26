
// Array of images //

const images = [document.getElementById('imageone'), document.getElementById('imagetwo'), document.getElementById('imagethree')]
// Setting the current index value // 
let currentImage = 0
function updateCarousel() {
    // Hiding all the images
    images.forEach(image => {
        image.style.display = 'none';
    })
    // Showing the first image
    images[currentImage].style.display = "inline";
}
document.getElementById('right').addEventListener('click', function() {
    currentImage =  (currentImage + 1) % images.length; // always get to index 0 when we get to last image
    updateCarousel()
})
document.getElementById('left').addEventListener('click', function() {
    currentImage =  (currentImage -1 + images.length) % images.length; // always get to index 0 when we get to last image
    updateCarousel()
})
updateCarousel()
