import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class Topic extends React.Component {
  render() {
    const article = this.props.article
    const lifeArticle = article.filter(item => item.type === 'life').slice(0, 2)
    return (
      <div>
        {
          lifeArticle.map(item => {
            return (
              <Link key={item.id} to={
                {
                  pathname: '/showArticle',
                  state: { id: item.id }
                }
              }
                className='topic' style={{ background: `url('${item.imgSrc}') no-repeat`, backgroundSize: 'cover' }}>
                <div className="topic__tag">慢生活</div>
                <div className="topic__title">{item.title}</div>
              </Link>
            )
          })
        }
      </div>

    )
  }
}

export default Topic