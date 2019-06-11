import React from 'react'
import { connect } from 'react-redux'
import PageBanner from '../../component/pageBanner/PageBanner'
import ArticleLink from '../../component/articleLink/ArticleLink'
import TypeWrapper from '../../component/typeWrapper/TypeWrapper'
import './style.css'

class ShowArticle extends React.Component {
  render() {
    const articleList = this.props.articleList
    const articleId = this.props.location.state.id

    const showArticle = articleList.filter(item => item.id === articleId)[0]

    return (
      <div className="showArticle">
        <PageBanner imgSrc={'/source/images/about_poster.jpg'} lTitle={showArticle.tag} exp={'江湖没什么好的，也就酒还行。'} />
        <div className='mainWrapper'>
          <div className="main">
            <div className="article">
              <h3 className='article__title'>{showArticle.title}</h3>
              <div className="article__detail">
                <div className="detail__tag">
                  <i></i>
                  {showArticle.tag}
                </div>
                <div className="detail__time">
                  <i></i>
                  {showArticle.time}
                </div>
                <div className="detail__view">
                  <i></i>
                  {showArticle.view}
                </div>
                <div className="detail__zan">
                  <i></i>
                  {showArticle.zan}
                </div>
              </div>
              <div className="article__content">
                {showArticle.content}
              </div>
            </div>
          </div>
          <div className="asside">
            <TypeWrapper title={'特别推荐'}>
              <ArticleLink articleList={articleList} />
            </TypeWrapper>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.home.articleList
})

export default connect(mapStateToProps)(ShowArticle)