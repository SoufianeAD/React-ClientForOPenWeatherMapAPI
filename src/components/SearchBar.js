import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";

class SearchBar extends React.Component {

    state = {term: ''};

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    onInputChange(term) {
        this.setState({term});
    }

    render() {
        return (
            <form onSubmit={(event) => this.onFormSubmit(event)} >
                <div className="input-group">
                    <input
                        className="form-control"
                        value={this.state.term}
                        onChange={(event) => this.onInputChange(event.target.value)}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-light">Search</button>
                    </span>
                </div>
            </form>
        );
    }
}

export default connect(null, { fetchWeather })(SearchBar);