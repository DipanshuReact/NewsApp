import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    
    let {title,description,imageUrl,newsUrl} = this.props;

    return (

      <div className="my-4">
        <div className="card" style={{width : "18rem", height:"450px"}}>
          <img src={!imageUrl?"https://bl-i.thgim.com/public/incoming/crwrdc/article67304067.ece/alternates/LANDSCAPE_1200/Stock%20Market%20Live%20Today%20-%20Share%20Market-140923.jpg.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            <a href={newsUrl?"https://bl-i.thgim.com/public/incoming/crwrdc/article67304067.ece/alternates/LANDSCAPE_1200/Stock%20Market%20Live%20Today%20-%20Share%20Market-140923.jpg.jpg":newsUrl} className="btn btn-sm  btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;