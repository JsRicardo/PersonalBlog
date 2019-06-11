import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class ArticleLink extends React.Component {
  render() {
    const articleList = this.props.articleList.slice(0, 5)
    return (
      <div>
        {
          articleList.map((item, index) => {
            return (
              <Link to={
                {
                  pathname: '/showArticle',
                  state: { id: item.id }
                }
              } className='articleLink' key={item + index}>
                <div className="articleLink__img">
                  <img className='article__img' src={item.imgSrc} alt="" />
                </div>
                <div className="articleLink__text">
                  <p className='articleLink__title'>{item.title}</p>
                  <span className='articleLink_time'>[{item.time}]</span>
                </div>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

export default ArticleLink