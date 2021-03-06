import React from 'react'
import './style.css'

class Description extends React.Component {
  render() {
    return (
      <div className='description'>
        <div className="imgbg"></div>
        <div className="avatar">
          <img src="http://f.jiangpaipinpai.com/img/caseimg/blogImg/images/avatar.jpg" alt=""/>  
        </div> 
        <div className="description__wrapper">
          <h2 className="description__name">
            Ricardo.M.Lee
          </h2>
          <h4 className='description__job'>
            前端开发工程师
          </h4>
          <p className="description__text">
            一个90后小伙，哦不，现在应该叫大叔了... <br />
            不过无所谓了，对于18年网络工程毕业的我来说，在前端这条路上还有很多路要走。
          </p>
        </div>    
        <div className="link">
          <span className="link__logo"></span>
          <a href='https://github.com/JsRicardo' className="link__addr">https://github.com/JsRicardo</a>
        </div>
      </div>
    )
  }
}

export default Description