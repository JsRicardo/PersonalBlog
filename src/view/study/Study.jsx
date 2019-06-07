import React from 'react'
import Article from '../../component/article/Article'
import TypeWrapper from '../../component/typeWrapper/TypeWrapper'
import ArticleLink from '../../component/articleLink/ArticleLink'
import PageBanner from '../../component/pageBanner/PageBanner'
import './style.css'

class Study extends React.Component {
  render() {
    return (
      <div className='study'>
        <PageBanner imgSrc={'/source/images/study_poster.jpg'} lTitle={'学无止境'} exp={'君子坐而论道，学生起而行之。'} />
        <div className="mainWrapper">
          <div className="main">
            <Article />
            <Article />
            <Article />
          </div>
          <div className="asside">
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

export default Study