import React from 'react'
import Pagination from "react-js-pagination"
import './style.css'

class HOME extends React.Component {

  handlePageChange = (pageNumber) => {
    const newPage = pageNumber - 1
    this.props.changeNowPage(newPage)
  }

  render() {
    const { nowPage, count, pageSize, } = this.props
    const activePage = nowPage + 1
    return (
      <div className='pagenation__wrapper'>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={pageSize}
          totalItemsCount={count}
          onChange={this.handlePageChange}
          prevPageText={'<'}
          nextPageText={'>'}
        />
      </div>
    );
  }
}

export default HOME