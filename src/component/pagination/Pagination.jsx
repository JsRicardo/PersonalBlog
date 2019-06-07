import React from 'react'
import Pagination from "react-js-pagination"
import './style.css'

class HOME extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <div className='pagenation__wrapper'>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={8}
          onChange={this.handlePageChange}
          prevPageText={'<'}
          nextPageText={'>'}
        />
      </div>
    );
  }
}

export default HOME