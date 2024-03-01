const images = [
        '../library/images/bild1Galleri.png',
        '../library/images/bild2Galleri.png',
        '../library/images/bild3Galleri.png',
        '../library/images/bild4Galleri.png',
        '../library/images/bild5Galleri.png',
        '../library/images/bild6Galleri.png',
        '../library/images/bild7Galleri.png',
        '../library/images/bild8Galleri.png',
        '../library/images/bild9Galleri.png'
];
 
const totalItems = images.length;

function getRandomInt() {
        const randomValue = Math.random();
        const multipliedValue = Math.floor(randomValue * totalItems);
        return multipliedValue;
}


function getRandomImage() {
        const randomIndex = getRandomInt(totalItems);
        const randomImage = images[randomIndex];
        const imgElement = document.getElementById('randomImage');
        imgElement.src = randomImage;
    }

window.addEventListener('load', () => {
        getRandomImage(); 
});