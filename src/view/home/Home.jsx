import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/action/homeAction'

import request from '../../helpers/request'
import PosterSlide from './component/slider/PosterSlider'
import Article from '../../component/article/Article'
import ArticleLink from '../../component/articleLink/ArticleLink'
import TypeWrapper from '../../component/typeWrapper/TypeWrapper'
import Tags from './component/tags/Tags'
import Topic from './component/topic/Topic'
import Pagination from '../../component/pagination/Pagination'

import './style.css'

class Home extends React.Component {

  componentWillMount() {
    request('article', (articleList) => {
      this.props.setArticleList(articleList)
    })
  }

  changeNowPage = (newpage) => {
    this.props.changeNowPage(newpage)
  }

  render() {
    const { articleList, nowPage, pageSize, count } = this.props
    
    return (
      <div className='home'>
        <div className="main">
          <div className="main__banner">
            <PosterSlide />
          </div>
          <div className="main__blogs">
            <Article articleList={articleList} nowPage={nowPage} pageSize={pageSize} />
            <div className="home__pagination">
              <Pagination nowPage={nowPage} pageSize={pageSize} count={count} changeNowPage={this.changeNowPage} />
            </div>
          </div>
        </div>
        <div className="asside">
          <div className="topicWrapper">
            <Topic article={articleList} />
          </div>
          <div className="articleLinkWrapper">
            <TypeWrapper title={'标签云'}>
              <Tags />
            </TypeWrapper>
            <TypeWrapper title={'推荐文章'}>
              <ArticleLink articleList={articleList} />
            </TypeWrapper>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProp = (state) => {
  const { articleList, nowPage, count, pageSize } = state.home
  return {
    articleList,
    nowPage,
    pageSize,
    count
  }
}

export default connect(mapStateToProp, actions)(Home)