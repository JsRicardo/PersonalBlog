import React from 'react'
import { connect } from 'react-redux'
import PageBanner from '../../component/pageBanner/PageBanner'
import ArticleLink from '../../component/articleLink/ArticleLink'
import TypeWrapper from '../../component/typeWrapper/TypeWrapper'
import './style.css'

class ShowArticle extends React.Component {
  state = {
    showArticle: '',
    articleList:[]
  }

  componentDidMount() {
    const articleList = this.props.articleList
    const articleId = this.props.location.state.id

    const showArticle = articleList.filter(item => item.id === articleId)[0]

    this.setState({
      showArticle,
      articleList
    })

    this.refs.articleContent.innerHTML = showArticle.content
  }

  render() {
    const showArticle = this.state.showArticle
    const articleList = this.state.articleList
    return (
      <div className="showArticle">
        <PageBanner imgSrc={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560253953741&di=e32c75a78fbb4776c123bdc5e9d1ace8&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F13%2F08%2F47599d3ac5dc084.jpg'} lTitle={showArticle.tag} exp={'江湖没什么好的，也就酒还行。'} />
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
              <div className="article__content" ref='articleContent'></div>
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