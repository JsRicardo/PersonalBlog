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
        <PageBanner imgSrc={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560253831294&di=8db69f0ba2c998bd3d42353c90915a66&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F03%2F77%2Fe0498a249c91bd8aee4888bd786152b3.jpg'} lTitle={'慢生活'} exp={'山中何事，松花酿酒，春水煎茶，愿得大逍遥。'} />
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