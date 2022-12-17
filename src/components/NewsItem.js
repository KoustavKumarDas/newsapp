import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

    let a = {date};
    let d = new Date(a);

    return (
      <>
        <div className="card" style={{width: "100%"}}>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>
                {source}
                <span className="visually-hidden">unread messages</span>
            </span>
            <img src={!imageUrl?'https://images.hindustantimes.com/tech/img/2022/12/12/1600x900/brandon-lee-jT5mSPEteVc-unsplash_1670861068740_1670861087649_1670861087649.jpg':imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                <p className="card-text mb-0 my-3"><small className="text-muted">By {!author?'NA':author}</small></p>
            </div>
            <div className="card-footer text-muted">
                {new Date(date).toGMTString()}
            </div>
        </div>
      </>
    )
  }
}

export default NewsItem