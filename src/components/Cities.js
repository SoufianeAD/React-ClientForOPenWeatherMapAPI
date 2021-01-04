import React from "react";
import { connect } from "react-redux"
import { fetchWeather } from "../actions";
import Chart from "./Chart";
import Map from "./Map";

class Cities extends React.Component {

    componentDidMount() {
        this.props.fetchWeather();
    }

    renderHumidity(weather) {
        return weather.list.map(w => w.main.humidity);
    }

    renderPressure(weather) {
        return weather.list.map(w => w.main.pressure);
    }

    renderTemperature(weather) {
        return weather.list.map(w => w.main.temp);
    }

    renderMap(weather) {
        const { lat, lon } = weather.city.coord;
        return <Map lat={lat} lon={lon} />;
    }

    renderCity() {

        return this.props.weather.map( weather => {
            return (
                <tr key={weather.city.name}>
                    <td>{this.renderMap(weather)}</td>
                    <td>
                        <Chart data={this.renderTemperature(weather)} color='orange' units='K' />
                    </td>
                    <td>
                        <Chart data={this.renderPressure(weather)} color='green' units='HPA' />
                    </td>
                    <td>
                        <Chart data={this.renderHumidity(weather)} color='black' units='%' />
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <table className="mt-3 table table-stripped table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (k)</th>
                        <th>Pressure (HPA)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderCity()}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return { weather: state.weather };
}

export default connect(mapStateToProps, { fetchWeather })(Cities);