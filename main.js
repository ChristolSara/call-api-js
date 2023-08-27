function displayPosition(position)
{
    const latContainer = document.getElementById('latitude');
    const lngContainer = document.getElementById('longitude');

    latContainer.textContent = '';
    lngContainer.textContent = '';

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    latContainer.textContent = lat;
    lngContainer.textContent = lng;
}

 const url = "http://localhost:8082/attractions";


 fetch(url)
     .then(function(response) {
         return response.json(); // On parse le corps de la réponse JSON pour récupérer ensuite les données
     })
     .then(function(data){
          console.log(data)
   });



