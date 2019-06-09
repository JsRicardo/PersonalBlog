import React from 'react'
import { connect } from 'react-redux'
import request from '../../helpers/request'
import * as actions from '../../redux/actionCreator'
import './style.css'

class Article extends React.Component {
  
  componentWillMount() {
    request('article', (articleList) => {
      this.props.setArticleList(articleList)
    })
  }

  render() {
    const { articleList, nowPage, pageSize } = this.props
    const showArticle = articleList.slice(nowPage, pageSize)
    console.log(showArticle, nowPage, pageSize)
    return (
      <div>
        {
          showArticle.map((item, index) => {
            return (
              <div className='article' key={item + index}>
                <a href="#" className='article__title'>{item.title}</a>
                <div className="article__content">
                  <div className="content__img">
                    <img src={item.imgSrc} alt="" />
                  </div>
                  <div className="right">
                    <p className="content__blog">
                      {item.content}
                    </p>
                    <div className="content__detail">
                      <div className="detail__time">
                        <i></i>
                        {item.time}
                      </div>
                      <div className="detail__view">
                        <i></i>
                        {item.view}
                      </div>
                      <div className="detail__zan">
                        <i></i>
                        {item.zan}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}


const mapStateToProp = (state) => {
  const { articleList, nowPage, pageSize } = state
  return { articleList, nowPage, pageSize }
}


export default connect(mapStateToProp, actions)(Article)