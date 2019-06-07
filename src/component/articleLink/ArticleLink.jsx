import React from 'react'
import './style.css'

class ArticleLink extends React.Component {
  render() {
    return (
      <div className='articleLink'>
       <div className="articleLink__img">
         <img className='article__img' src="/source/images/article1.jpg" alt=""/>
       </div>
       <div className="articleLink__text">
         <p className='articleLink__title'>个人博客，属于我的小世界！</p>
         <span className='articleLink_time'>[2018-07-15]</span>
       </div>
      </div>
    )
  }
}

export default ArticleLink