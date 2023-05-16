import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description , imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card my-2" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://lh3.googleusercontent.com/8hRRsq-5RSeLvRv5NAGrQAmrPXTg2vnyYjNIdXM9qhbNCUI0A09T_J3wsFpsSBVsRcRs0-YSVT-gKc6GPqoWwpBPZQ=w128-h128-e365-rj-sc0x00ffffff":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body" >
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>     
      </div>
    )
  }
}

export default NewsItem
