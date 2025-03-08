document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById("modalGallery");

    // Ensure modal exists
    if (!modal) {
        console.error("Modal element not found!");
        return;
    }

    // Open Modal Function
    window.openModal = function() {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent page scrolling
    };

    // Close Modal Function
    window.closeModal = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling again
    };

    // Close modal when clicking outside the content
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
});

function openFullscreen() {
    const video = document.getElementById("propertyVideo");
    
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}
