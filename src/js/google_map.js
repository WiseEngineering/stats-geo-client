define([], () => {
    return {
        init: () => {
            return new google.maps.Map(document.getElementById('map'), {
                center: {lat: 0, lng: 0},
                zoom: 3
            })
        }
    };
});
