function initMap() {
    const lokasi = { lat: -6.21462, lng: 106.84513 }; // Jakarta, Indonesia
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: lokasi,
    });
    new google.maps.Marker({
        position: lokasi,
        map: map,
        title: "Lokasi Kami",
    });
}
