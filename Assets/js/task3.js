    var originalImageSrc = "../library/images/bild5Galleri.png";
    var hoverImageSrc = "../library/images/bild4Galleri.png";
    
    function changeImage() {
        document.getElementById('onMouseOverImg').src = hoverImageSrc;
    }

    function resetImage() {
        document.getElementById('onMouseOverImg').src = originalImageSrc;
    }