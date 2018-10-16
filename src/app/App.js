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
        }
      }
     }

    //this.showMoneyStats = this.showMoneyStats.bind(this);
  }

  // showMoneyStats = () => {
  //   const moneyStats = this.state.stats.map((moneyStats) =>
  //     <MoneyStats moneyStats={moneyStats} key={moneyStats.serverName} />
  //   );

  //   return (moneyStats);
  // }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <div className="container-fluid">
            <div className="row">
              <MoneyStats moneyStats={this.state.stats.money} />
              <TrafficStats />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
