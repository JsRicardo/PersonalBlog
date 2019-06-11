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
        <PageBanner imgSrc={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560253953689&di=38275f25489ffca1c41e9e18abb7c952&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F04%2F27%2F49%2F21b14389caaf96ffbb3c23e6222608f6.jpg'} lTitle={'学无止境'} exp={'君子坐而论道，学生起而行之。'} />
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