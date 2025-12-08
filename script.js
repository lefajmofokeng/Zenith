function nfChangeImage(clickedThumb) {
        // 1. Get the source of the image inside the clicked thumbnail
        const newSrc = clickedThumb.querySelector('img').src;
        
        // 2. Target the main image element by ID
        const mainImage = document.getElementById('nf-prod-main-img-target');
        
        // 3. Update the main image source
        // Optional: Add a quick fade effect logic here if desired, but direct swap is snappier
        mainImage.src = newSrc;

        // 4. Handle Active Styling (The white border)
        // Get all thumbnail frames
        const allThumbs = document.querySelectorAll('.nf-prod-thumb-frame');
        
        // Remove active class from all
        allThumbs.forEach(thumb => {
            thumb.classList.remove('nf-prod-thumb-active');
        });

        // Add active class to the clicked thumbnail
        clickedThumb.classList.add('nf-prod-thumb-active');
    }