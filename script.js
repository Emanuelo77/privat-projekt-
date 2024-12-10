document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert(`Sie haben auf ${link.textContent} geklickt!`);
        });
    });
});

// Funktion zur Bestimmung der aktuellen Position
function setCurrentLocation() {
    const defaultLat = 50.1324;
    const defaultLon = 8.9183;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                document.getElementById('map').src = `https://www.google.com/maps/embed/v1/view?zoom=14&center=${lat},${lon}&key=AIzaSyBtUVcIJM2wYvsD0_OxNNvHjPix9QAoJdU`;
            },
            (error) => {
                console.error("Geolocation Error:", error);
                document.getElementById('map').src = `https://www.google.com/maps/embed/v1/view?zoom=14&center=${defaultLat},${defaultLon}&key=AIzaSyBtUVcIJM2wYvsD0_OxNNvHjPix9QAoJdU`;
            }
        );
    } else {
        document.getElementById('map').src = `https://www.google.com/maps/embed/v1/view?zoom=14&center=${defaultLat},${defaultLon}&key=AIzaSyBtUVcIJM2wYvsD0_OxNNvHjPix9QAoJdU`;
    }
}

window.onload = setCurrentLocation;
