document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll('.galleryItem');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

/* creates display block */

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = item.src;
            caption.textContent = item.alt;
        });
    });

/* x button */
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

/* tapping out of image closes display */

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});
