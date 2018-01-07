import React, { Component } from 'react'

var weatherCons = {
    'Thunderstorm': '11d',
    'Drizzle':'09d',
    'Rain':'10d',
    'Snow':'13d',
    'Atmosphere': '50d',
    'Clear':'01d',
    'Clouds':'02d',
}
class City extends React.Component {
    constructor(props) {
        super(props)
        this.state = { temp: 0, humidity: 0, main: '', imgUrl: '', class: 'noDisplay' }
    }

    bringData = () => {
        if (this.state.class === 'noDisplay') {

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.name}&APPID=adc451f52cebe8aea0c8fdb338196178`)
                .then((res) => res.json())
                .then(res => {
                    console.log(res)
                    this.setState((prevState) => ({
                        temp: (res.main.temp-32)*5/9,
                        humidity: res.main.humidity,
                        main: res.weather[0].main,
                        class: 'display',
                        imgUrl: 'http://openweathermap.org/img/w/'+ weatherCons[res.weather[0].main] +'.png'
                        
                        
                    })
                    )
                   
                    
                }
                )
        }
        else {
            this.setState((prevState) => ({
                class: 'noDisplay'
            })
            )
        }
    }


    render() {
        console.log(this.props)

        return (
            <div className="city">
                <h2 className="cityName" onClick={this.bringData}>{this.props.name}</h2>
                <div className={this.state.class}>

                    <div>the weather today will be {this.state.main}</div>
                    <div>celcius temprature: {this.state.temp}</div>
                    <div>humidity precentage: {this.state.humidity}</div>
                    <img src={this.state.imgUrl} alt=""/>
                    
                </div>

            </div>

        );
    }
}

export default City;
