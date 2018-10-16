import React, {Component} from 'react';
import './income-stats.css';

class IncomeStats extends Component {
    constructor(props) {
        super(props);
        this.displayFollowers = this.displayFollowers.bind(this);
        this.displayMonthlyIncome = this.displayMonthlyIncome.bind(this);
        this.displayYearlyIncomeGoal = this.displayYearlyIncomeGoal.bind(this);
    }

    displayFollowers = (amount) => {
        return(
            <div className="card col-sm">
                    <div className="card-title">
                        <b>{amount}</b>
                    </div>
                    <div className="card-text">
                        New followers added this month
                    </div>
            </div>
        );
    }

    displayMonthlyIncome = (amount) => {
        return(
            <div className="card col-sm">
                    <div className="card-title ">
                        <b>$  {amount}</b>
                    </div>
                    <div className="card-text">
                        Average Monthly Income
                    </div>
            </div>
        );
    }

    displayYearlyIncomeGoal = (amount) => {
        return(
            <div className="card col-sm">
                    <div className="card-title">
                        <b>$  {amount}</b>
                    </div>
                    <div className="card-text">
                        Yearly Income Goal
                    </div>
            </div>
        );
    }
    render() {
        return (
            <div className="row incomeStats">
                {this.displayFollowers(this.props.incomeStats.followers)}
                {this.displayMonthlyIncome(this.props.incomeStats.monthly)}
                {this.displayYearlyIncomeGoal(this.props.incomeStats.yearlyGoal)}
            </div>
        );
    }
}

export default IncomeStats;