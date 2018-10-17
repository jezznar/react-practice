import React, { Component } from 'react';
import './App.css';
import MoneyStats from '../money-stats/money-stats';
import TrafficStats from '../traffic-stats/traffic-stats';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stats: {
        serverName: "thisServer",
        money: {
          income: {
            followers: 20,
            monthly: 1250,
            yearlyGoal: 13865,
          },
          photos: [
            {
              name: "photo1",
              views: 15080,
              likes: 12000,
              comments: 5100
            },
            {
              name: "photo2",
              views: 17008,
              likes: 13000,
              comments: 5200
            }
          ]
        },
        traffic: {
          location: "Paris",
          temperature: 18,
          newVisitors: 1500,
          bounceRate: 0.5,
          searches: 0.28,
          bandwidth: 140.5
        }
      }
     }

  }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <div className="container-fluid">
            <div className="row">
              <MoneyStats moneyStats={this.state.stats.money} />
              <TrafficStats trafficStats={this.state.stats.traffic} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
