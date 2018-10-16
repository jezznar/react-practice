import React, {Component} from 'react';
import './photo-stats.css';

class PhotoStats extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            photoStats: this.props.photoStats
        }
        this.displayShotViewAmount = this.displayShotViewAmount.bind(this);
        this.displayLikeAmount = this.displayLikeAmount.bind(this);
        this.displayCommentAmount = this.displayCommentAmount.bind(this);
    }

    displayShotViewAmount = (amount) => {
        return (
            <div className="col">
                <span>{amount}</span><br />Shot Views
            </div>
        );
    }

    displayLikeAmount = (amount) => {
        return (
            <div className="col">
                <span>{amount}</span><br />Likes
            </div>
        );
    }

    displayCommentAmount = (amount) => {
        return (
            <div className="col">
                <span>{amount}</span><br />Comments
            </div>
        );
    }

    createPhotoList = () => {
        const photoList = this.state.photoStats.map((photo) =>
            <div className="photostats-item" key={photo.name} >
                <div className="row">
                    <div className="col photostats-img">
                    </div>
                </div>
                <div className="row photostats-details">
                        {this.displayShotViewAmount(photo.views)}
                        {this.displayLikeAmount(photo.likes)}
                        {this.displayCommentAmount(photo.comments)}
                </div>
            </div>
        );

        return (photoList);
    }
    render() {
        return (
            <div className="row photostats">
                {this.createPhotoList()}
            </div>
        );
    }
}

export default PhotoStats;