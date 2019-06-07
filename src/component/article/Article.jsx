import React from 'react'
import request from '../../helpers/request'
import './style.css'

class Article extends React.Component {
  state = {
    articleList: []
  }

  componentWillMount() {
    request('article', (articleList) => {
      this.setState({
        articleList
      })
    })
  }

  render() {
    const { articleList } = this.state
    return (
      <div>
        {
          articleList.map((item, index) => {
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

export default Article