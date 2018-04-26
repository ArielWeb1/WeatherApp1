
const mymap = L.map('mapid').setView([51.505, -0.09], 13);//init zoom of london
const MAPTOKEN = 'pk.eyJ1IjoiYXJpZWxtMSIsImEiOiJjamczcXd4d3UwcW9sMzRsanZjdDcwcWQwIn0.wuQXF6GfRg23bygO5eC-oA';
const WEATERTOKEN = '6875c8ecc27e8699966834815119daee';
const selectCity = document.getElementById("selectCity");// The option city that chosen

let dataApi = {};
let lastSelectedCity;

selectCity.addEventListener('change' ,()=> {
    const city = new City(selectCity.value); //Creates a City object
    console.log('select value: ' + city);
   // getApi('London,uk');
    getApi(city);
    setMapMarkers(city);
    lastSelectedCity = city;
//    showWeatherData(cityName);
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+MAPTOKEN, {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

/*
    function getApi (city) {
    console.log(city);
    fetch('http://api.openweathermap.org/data/2.5/find?q=' +city+ '&units=metric&appid=' + wetherToken)
       // .then(response => response.json())
        .then(data => {
            console.log(data)
            dataApi = data;
            createWeahter(data);
           // showWeather(data);
        })
        // .then(response => {
        //     if (response.ok) {
        //         let test = response.json().then(body => console.log(body));
        //         console.log(test);
        //         console.log(response);
        //       createWeahter(response);
        //      //   let weather = createWeahter(response);
        //      //   document.getElementById("cloudiness").innerHTML = "";
        //     } else {
        //         let errorMessage = `${response.status} (${response.statusText})`,
        //             error = new Error(errorMessage);
        //         throw(error);
        //     }
       //  })
        // .then(response => response.json())

        .catch(error => console.error(`Error in fetch: ${error.message}`));
}
*/

// get Openweathermap Api function
function getApi(city) {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city.cityName}&units=metric&appid=${WEATERTOKEN}`;
    $.ajax({
        url: URL,
        type: "GET",
        dataType: "json",
        success(data){
            console.log(data);
            dataApi = data;
           // createWeather(dataApi);
            showWeather(createWeather(dataApi), city);
        },
        error(jqXHR, status,errorThrown){
            console.log(jqXHR);
        }
    });
}
// Creates a weather object
    function createWeather (dataApi) {

        let icon = (dataApi['weather'][0]['icon']);
        let cloudiness = dataApi.clouds.all;
        let rain = (dataApi['weather'][0]['description']);
        let humidity = (dataApi['main']['humidity']);
        let temperature = (dataApi['main']['temp']);

    return new Weather (icon, cloudiness, rain, humidity, temperature);
}

// Prints weather information by selected city
function showWeather(weather, city){
    document.getElementById('name').innerHTML = `Weather in  ${city.fullName}`;
    document.getElementById('icon').innerHTML = `<img src="http://openweathermap.org/img/w/${weather.icon}.png"/>`;
    document.getElementById('cloudiness').innerHTML = `${weather.cloudiness}%`;
    document.getElementById('rain').innerHTML = ` ${weather.rain}`;
    document.getElementById('humidity').innerHTML = `${weather.humidity}%`;
    document.getElementById('temperature').innerHTML = `${weather.temperature} °C`;
}

//Zooms a map into a selected city and puts markers in the right colors of city
function setMapMarkers(city) {
    mymap.setView(city.coordMap.courdinates, 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+MAPTOKEN, {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);

    //Marker Details
    let markerCircle = {
        color: '#191aff',
        fillColor: city.coordMap.markers,
        fillOpacity: 0.5,
        radius: 30
    };
    //change circleMarker color by chosen city
    const circleMarker = L.circleMarker(city.coordMap.courdinates, markerCircle).addTo(mymap);
}
