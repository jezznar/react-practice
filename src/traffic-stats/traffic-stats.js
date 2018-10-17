import React, {Component} from 'react';
import './traffic-stats.css';

class TrafficStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trafficStats: this.props.trafficStats
        }
        console.log(props, this.state);
        this.displayLocationInfo = this.displayLocationInfo.bind(this);
        this.displayVisitorInfo = this.displayVisitorInfo.bind(this);
        this.displayBounceRate = this.displayBounceRate.bind(this);
        this.displaySearches = this.displaySearches.bind(this);
        this.displayBandwidth = this.displayBandwidth.bind(this);
    }

    displayLocationInfo = () => {
        return (
            <div>
                <ul className="location list-group">
                    <li className="list-group-item">
                        <div className="textLarge">
                            {this.state.trafficStats.temperature}°
                        </div>
                        <div className="textSmall">
                            {this.state.trafficStats.location}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }

    displayVisitorInfo = () => {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item visitor">
                        <div className="textSmall">
                            New Visitors
                        </div>
                        <div className="textLarge">
                            {(this.state.trafficStats.newVisitors/1000).toFixed(1)}k
                        </div>
                    </li>
                    <li className="list-group-item space">
                    </li>
                </ul>
            </div>
        );
    }

    displayBounceRate = () => {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item bouncerate">
                        <div className="textSmall">
                            Bounce Rate
                        </div>
                        <div className="textLarge">
                        {(this.state.trafficStats.bounceRate * 100).toFixed(0)}%
                        </div>
                    </li>
                    <li className="list-group-item space">
                    </li>
                </ul>
            </div>
        );
    }

    displaySearches = () => {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item searches">
                        <div className="textSmall">
                            Searches
                        </div>
                        <div className="textLarge">
                        {(this.state.trafficStats.searches * 100).toFixed(0)}%
                        </div>
                    </li>
                    <li className="list-group-item space">
                    </li>
                </ul>
            </div>
        );
    }

    displayBandwidth= () => {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item bandwidth">
                        <div className="textSmall">
                            Traffic
                        </div>
                        <div className="textLarge">
                            {this.state.trafficStats.bandwidth} kb
                        </div>
                    </li>
                    <li className="list-group-item space">
                    </li>
                </ul>
            </div>
        );
    }
    
    render() {
        return (
            <div className="col-md-3">
                <div className="trafficStats">
                    {this.displayLocationInfo()}
                    {this.displayVisitorInfo()}
                    {this.displayBounceRate()}
                    {this.displaySearches()}
                    {this.displayBandwidth()}
                </div>
            </div>
        );
    }
}

export default TrafficStats;