function initMap(){
        navigator.geolocation.getCurrentPosition(function(position){
            let latitud = position.coords.latitude;
            let longitud = position.coords.longitude;
            
            let directionsService = new google.maps.DirectionsService;
            let directionsDisplay = new google.maps.DirectionsRenderer;
        
            let inicio = new google.maps.LatLng(latitud, longitud);
            let final = new google.maps.LatLng(40.4378698, -3.8196189);
        
            const indicaciones = document.getElementById('indicaciones');
        
            //let inicio = {lat: 40.1971813, lng:-3.8113127};
        
            let map = new google.maps.Map(document.getElementById('map'),{
                zoom: 6,
                center: inicio
            });
        
            directionsDisplay.setMap(map);
            directionsDisplay.setPanel(indicaciones);
        
            directionsService.route({
                origin: inicio,
                destination: final,
                travelMode:google.maps.TravelModee.DRIVING
            }, function(response, status){
                if(status == google.maps.DictionsStatus.OK){
                    directionsDisplay.setDirections(response);
                }else{
                    alert("Error");
                }
            })

        })
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;

        let inicio = new google.maps.LatLng(latitud, longitud);
        let final = new google.maps.LatLng(40.4378698, -3.8196189);

        const indicaciones = document.getElementById('indicaciones');

        //let inicio = {lat: 40.1971813, lng:-3.8113127};

        let map = new google.maps.Map(document.getElementById('map'),{
            zoom: 6,
            center: inicio
        });

        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(indicaciones);

        directionsService.route({
            origin: inicio,
            destination: final,
            travelMode:google.maps.TravelModee.DRIVING
        }, function(response, status){
            if(status == google.maps.DictionsStatus.OK){
                directionsDisplay.setDirections(response);
            }else{
                alert("Error");
            }
        })
}