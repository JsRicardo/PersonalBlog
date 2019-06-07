import React from 'react'
import Description from '../../component/description/Description'
import PageBanner from '../../component/pageBanner/PageBanner'
import './style.css'

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <PageBanner imgSrc={'/source/images/about_poster.jpg'} lTitle={'关于我'} exp={'遇事不决，可问春风。'} />
        <div className="mainWrapper">
          <div className="main">
            <p className="about__knowMe">杨青，女，一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。我入行早，大家也亲切的叫我“青姐”。</p>
            <p className="about__knowMe">SEO奋斗了将近两年时间，个人博客网站百度排名也从之前的30页后，排到了第一页。期间有很多的不容易，但是都没有放弃过。入了这一行 ，就深深的喜欢上它。我喜欢一句话“冥冥中该来则来，无处可逃”。</p>
            <p className="about__knowMe">近几年我也发现个人博客排前几页的也有很多是我做过的模板，感谢各位站长的欣赏，我仔细看过他们的网站。他们在我原模板的基础上有修改，而且他们做的原创内容都是值得一读的。有时候甚至排名都超过了我个人博客网站的排名。</p>
            <p className="about__knowMe">现在很多人向我请教如何做好SEO，我想说的是，一是“代码”，一定要简单，布局要合理。二是“内容”，一定要有原创，伪原创也是可以的。三是“持续”，这是一个持续性过程，一定要有耐心，SEO不是马上生效的。</p>
            <p className="about__knowMe"> 自从入了这一行，也交到了不少朋友，QQ群也不断的壮大起来，280998807(交流群 已满员)  280998843（技术群），群里的小伙伴们也很积极的帮助新朋友解决问题，如果你想加入我们，这个大家庭的门，永远给你敞开！另外微信群已于2018.4.13日开通（已满100，只接受群主邀请，可加我个人微信进群 。我的个人微信号 yangqq_1987）</p>
          </div>
          <div className="asside">
            <Description />
          </div>
        </div>
      </div>
    )
  }
}

export default About