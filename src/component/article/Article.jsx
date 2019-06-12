import React from 'react'
import { Link } from "react-router-dom"
import './style.css'

class Article extends React.Component {

  render() {
    const { articleList, pageSize, nowPage } = this.props
    const showArticle = articleList.slice(nowPage * pageSize, pageSize + nowPage * pageSize)

    return (
      <div>
        {
          showArticle.map((item, index) => {
            return (
              <div className='article' key={item + index}>
                <Link to={
                  {
                    pathname: '/showArticle',
                    state: { id: item.id }
                  }
                } className='article__title'>{item.title}</Link>
                <div className="article__content">
                  <div className="content__img">
                    <img src={item.imgSrc} alt="" />
                  </div>
                  <div className="right">
                    <p className="content__blog">
                      {item.synopsis}
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