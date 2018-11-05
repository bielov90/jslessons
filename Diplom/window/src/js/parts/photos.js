function photos() {
    let img = document.querySelectorAll(".photo"),
        pictures = document.querySelector(".pictures"),
        bigPhoto = document.createElement("div");

        function imgContent(a) {
        pictures.insertBefore(bigPhoto, img[a]);
        bigPhoto.classList.add("big_photo");
        }
        imgContent(0);

        img.forEach(function(photo, index) {
            photo.addEventListener("click", function(event) {
            event.preventDefault();
            bigPhoto.innerHTML = `<img src='img/our_works/big_img/${index + 1}.png'>`;
            bigPhoto.classList.add("big_photo_img");
            bigPhoto.style.display = "block";
            });
        });

        bigPhoto.addEventListener("click", function(event) {
            if (event.target.classList.contains("big_photo")) {
            bigPhoto.classList.remove("big_photo_img");
            bigPhoto.style.display = "none";
            }
        });
    
}
export default photos;

