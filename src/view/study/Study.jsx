import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/action/studyAction'
import Article from '../../component/article/Article'
import TypeWrapper from '../../component/typeWrapper/TypeWrapper'
import ArticleLink from '../../component/articleLink/ArticleLink'
import PageBanner from '../../component/pageBanner/PageBanner'
import Pagination from '../../component/pagination/Pagination'
import './style.css'

class Study extends React.Component {
  render() {
    const articleList = this.props.articleList.filter(item => item.type === 'study')
    const count = articleList.length
    const { pageSize, nowPage } = this.props
    return (
      <div className='study'>
        <PageBanner imgSrc={'/source/images/study_poster.jpg'} lTitle={'学无止境'} exp={'君子坐而论道，学生起而行之。'} />
        <div className="mainWrapper">
          <div className="main">
            <Article articleList={articleList} pageSize={pageSize} nowPage={nowPage} />
            <div className="study__pagination">
              <Pagination pageSize={pageSize} nowPage={nowPage} count={count} changeNowPage={this.changeNowPage} />
            </div>
          </div>
          <div className="asside">
            <TypeWrapper title={'推荐文章'}>
              <ArticleLink articleList={articleList} />
            </TypeWrapper>
          </div>
        </div>
      </div>
    )
  }
  changeNowPage = (newPage) => {
    this.props.changeNowPage(newPage)
  }
}

const mapStateToProp = (state) => ({
  articleList: state.home.articleList,
  nowPage: state.study.nowPage,
  pageSize: state.study.pageSize
})

export default connect(mapStateToProp, actions)(Study)