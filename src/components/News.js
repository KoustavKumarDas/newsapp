import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d437a8a2ef434a2a868d5d4af423d225&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading:false
        })
    }

    handlePrevClick = async ()=>{

        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d437a8a2ef434a2a868d5d4af423d225&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page : this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })
    }

    handleNextClick = async ()=>{
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d437a8a2ef434a2a868d5d4af423d225&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page : this.state.page + 1,
                articles: parsedData.articles,
                loading:false
            })
        }
    }

  render() {
    console.log('render')
    return (
      <>
        <div className="container">
            <h2 className="my-4 text-center">News Banana - Top Headlines</h2>
            {this.state.loading && <Spinner/>}
            <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-3 my-3" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0, 45):''} description={element.description?element.description.slice(0, 88):''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                })}
            </div>
        </div>
        <div className="container d-flex justify-content-between my-3">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </>
    )
  }
}

export default News