import React from 'react'
import PosterSlide from './component/slider/PosterSlider'
import Article from '../../component/article/Article'
import ArticleLink from '../../component/articleLink/ArticleLink'
import TypeWrapper from '../../component/typeWrapper/TypeWrapper'
import Tags from './component/tags/Tags'
import Topic from './component/topic/Topic'
import Pagination from '../../component/pagination/Pagination'
import './style.css'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className="main">
          <div className="main__banner">
            <PosterSlide />
          </div>
          <div className="main__blogs">
            <Article />
            <div className="home__pagination">
              <Pagination />
            </div>
          </div>
        </div>
        <div className="asside">
          <div className="topicWrapper">
            <Topic />
            <Topic />
          </div>
          <div className="articleLinkWrapper">
            <TypeWrapper title={'标签云'}>
              <Tags />
            </TypeWrapper>
            <TypeWrapper title={'推荐文章'}>
              <ArticleLink />
              <ArticleLink />
              <ArticleLink />
            </TypeWrapper>
          </div>
        </div>
      </div>
    )
  }
}


export default Home