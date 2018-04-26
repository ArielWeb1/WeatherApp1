
class City {
    constructor(input){
        this.fullName = input;
        this.cityName = this.getOnlyCityName();
        this.coordMap = this.getCityMap();
    }

    set fullName(name){
        this._fullName = name;
    }

    get fullName(){
        return this._fullName;
    }
/*
    set cityName(name){
        this.cityName = name.split(',');
    }

    get cityName(){
        return this.cityName;
    }

    get coordMap(){
        return this.coordMap;
    }
*/
     getOnlyCityName(){
        let onlyCity = this._fullName.split(',');
        return onlyCity[0];
    }

    getCityMap(){

        let coordMap = {
            courdinates: [],
            markers: ''
        };


        switch(this.cityName){
            case 'Tel Aviv':
                coordMap.courdinates = [32.0852999, 34.7817676];
                coordMap.markers = 'blue';
                break;

            case 'London':
                coordMap.courdinates = [51.5073509, -0.1277583];
                coordMap.markers = 'green';
                break;

            case 'Paris':
                coordMap.courdinates = [48.856614, 2.3522219];
                coordMap.markers = 'yellow';
                break;

            case 'New York':
                coordMap.courdinates = [40.7327753, -73.99];
                coordMap.markers = 'red';
                break;

            case 'Rome':
                coordMap.courdinates = [41.8899999, 12.4853655];
                coordMap.markers = 'brown';
                break;

            case 'Tokyo':
                coordMap.courdinates = [35.6894875, 139.6917064];
                coordMap.markers = 'orange';
                break;

            case 'Barcelona':
                coordMap.courdinates = [41.3850639, 2.1734035];
                coordMap.markers = 'lime';
                break;
        };
        return coordMap;

    }


}