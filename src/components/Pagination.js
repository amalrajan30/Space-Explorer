import React, { Component } from "react";
import { connect } from 'react-redux'
import { getImageData } from '../action'
import Popup from 'reactjs-popup'
import $ from 'jquery'

 class Pagination extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      todosPerPage: 16,
      upperPageBound: 5,
      lowerPageBound: 0,
      isPrevBtnActive: "disabled",
      isNextBtnActive: "",
      pageBound: 5,
      clickedImg: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnPrevClick = this.btnPrevClick.bind(this);
    this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
    this.handleImgClick = this.handleImgClick.bind(this);
  }

  componentDidUpdate() {
    $("ul li.active").removeClass("active");
    $("ul li#" + this.state.currentPage).addClass("active");
  }
  handleImgClick(e) {
    console.log('clicked')
  }
  handleClick(event) {
    let listid = Number(event.target.id);
    this.setState({
      currentPage: listid
    });
    $("ul li.active").removeClass("active");
    $("ul li#" + listid).addClass("active");
    this.setPrevAndNextBtnClass(listid);
  }
  setPrevAndNextBtnClass(listid) {
    let totalPage = Math.ceil(
      this.props.imageData.length / this.state.todosPerPage
    );
    this.setState({ isNextBtnActive: "disabled" });
    this.setState({ isPrevBtnActive: "disabled" });
    if (totalPage === listid && totalPage > 1) {
      this.setState({ isPrevBtnActive: "" });
    } else if (listid === 1 && totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
    } else if (totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
      this.setState({ isPrevBtnActive: "" });
    }
  }
  btnIncrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound
    });
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnDecrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnPrevClick() {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound
      });
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnNextClick() {
    if (this.state.currentPage + 1 > this.state.upperPageBound) {
      this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound
      });
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  render() {
    const {
      currentPage,
      todosPerPage,
      upperPageBound,
      lowerPageBound,
      isPrevBtnActive,
      isNextBtnActive
    } = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.props.imageData.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map(data => {
      return(
          <Popup 
          trigger={<img id="img-tumb" src={data.img_src} style={{cursor:'pointer'}} className="img-fluid img-thumbnail" key={data.id} />}
          modal
          closeOnDocumentClick
        >
        { close => (
          <div className='modal-content'>
          <div className='modal-body'>
          <img className='img-fluid' src={
            data.img_src
          } />
          <div className='modal-footer'>
          <a className='btn btn-primary' onClick={close}>Close</a>
          </div>
          </div>
          </div>
        )
        }
        </Popup>
      )
    })

    console.log(renderTodos)
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.imageData.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      if (number === 1 && currentPage === 1) {
        return (
          <li key={number} className="active page-item" id={number}>
            <a id={number} className="page-link" onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      } else if (number < upperPageBound + 1 && number > lowerPageBound) {
        return (
          <li key={number} id={number}>
            <a id={number} className="page-link" onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      }
    });
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = (
        <li className="">
          <a className="page-link" onClick={this.btnIncrementClick}>
            {" "}
            &hellip;{" "}
          </a>
        </li>
      );
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = (
        <li className="">
          <a className="page-link" onClick={this.btnDecrementClick}>
            {" "}
            &hellip;{" "}
          </a>
        </li>
      );
    }
    let renderPrevBtn = null;
    if (isPrevBtnActive === "disabled") {
      renderPrevBtn = (
        <li className={isPrevBtnActive}>
          <span id="btnPrev" className="page-link"> Prev </span>
        </li>
      );
    } else {
      renderPrevBtn = (
        <li className={isPrevBtnActive}>
          <a id="btnPrev" className="page-link" onClick={this.btnPrevClick}>
            {" "}
            Prev{" "}
          </a>
        </li>
      );
    }
    let renderNextBtn = null;
    if (isNextBtnActive === "disabled") {
      renderNextBtn = (
        <li className={isNextBtnActive}>
          <span id="btnNext" className="page-link"> Next </span>
        </li>
      );
    } else {
      renderNextBtn = (
        <li className={'page-item' + isNextBtnActive}>
          <a id="btnNext" className="page-link" onClick={this.btnNextClick}>
            {" "}
            Next{" "}
          </a>
        </li>
      );
    }
    return (
      <div>
        <ul>{renderTodos}</ul>
        <nav>
        <ul id="page-numbers" className="pagination">
          {renderPrevBtn}
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          {renderNextBtn}
        </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  imageData: state.imageData.img
})

export default connect(mapStateToProps, {getImageData}) (Pagination);
