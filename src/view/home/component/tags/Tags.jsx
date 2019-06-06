import React from 'react'
import './style.css'

const tagArr = ['Node JS', 'React.JS', 'Vue.JS', 'TypeScript', 'Python', 'ECMA6 Script']

class Detail extends React.Component {
  getRandom = () => Math.ceil(Math.random() * 255)

  getRgbColor = () => {
    const r = this.getRandom()
    const g = this.getRandom()
    const b = this.getRandom()

    return `rgb(${r},${g},${b})`
  }
  render() {
    return (
      <div className='tags'>
        {
          tagArr.map((item, index) => <button key={item + index} style={{ backgroundColor: this.getRgbColor() }}>{item}</button>)
        }
      </div>
    )
  }
}

export default Detail