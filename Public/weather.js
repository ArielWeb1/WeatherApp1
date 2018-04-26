
class Weather {
    constructor(icon, cloudiness, rain, humidity, temperature){
        this.icon = icon;
        this.cloudiness = cloudiness;
        this.rain = rain;
        this.humidity = humidity;
        this.temperature = temperature;
    }

    set icon(icon){
        this._icon = icon;
    }
    set cloudiness(cloudiness)
    {
        this._cloudiness = cloudiness;
    }
    set rain(rain){
        this._rain = rain;
    }
    set humidity(humidity){
        this._humidity = humidity;
    }
    set temperature(temperature){
        this._temperature = temperature;
    }

    get icon(){
        return this._icon;
    }

    get cloudiness(){
        return this._cloudiness;
    }
    get rain(){
        return this._rain;
    }
    get humidity(){
        return this._humidity;
    }
    get temperature(){
        return this._temperature;
    }

}