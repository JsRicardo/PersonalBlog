import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/action/lifeAction'
import Article from '../../component/article/Article'
import TypeWrapper from '../../component/typeWrapper/TypeWrapper'
import ArticleLink from '../../component/articleLink/ArticleLink'
import PageBanner from '../../component/pageBanner/PageBanner'
import Pagination from '../../component/pagination/Pagination'
import './style.css'

class Life extends React.Component {
  render() {
    const articleList = this.props.articleList.filter(item => item.type === 'life')
    const count = articleList.length
    const { pageSize, nowPage } = this.props
    return (
      <div className='Life'>
        <PageBanner imgSrc={'/source/images/study_poster.jpg'} lTitle={'慢生活'} exp={'山中何事，松花酿酒，春水煎茶，愿得大逍遥。'} />
        <div className="mainWrapper">
          <div className="main">
            <Article articleList={articleList} pageSize={pageSize} nowPage={nowPage} />
            <div className="Life__pagination">
              <Pagination nowPage={nowPage} pageSize={pageSize} count={count} changeNowPage={this.changeNowPage} />
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
  nowPage: state.life.nowPage,
  pageSize: state.life.pageSize
})

export default connect(mapStateToProp, actions)(Life)