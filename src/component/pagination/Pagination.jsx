import React from 'react'
import { connect } from 'react-redux'
import Pagination from "react-js-pagination"
import * as actions from '../../redux/actionCreator'
import './style.css'

class HOME extends React.Component {

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
  }

  render() {
    const { nowPage, count, pageSize } = this.props
    const activePage = nowPage + 1
    return (
      <div className='pagenation__wrapper'>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={pageSize}
          totalItemsCount={count}
          pageRangeDisplayed={pageSize}
          onChange={this.handlePageChange}
          prevPageText={'<'}
          nextPageText={'>'}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nowPage: state.nowPage,
  count: state.count,
  pageSize: state.pageSize
})

export default connect(mapStateToProps, actions)(HOME)