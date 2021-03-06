import React, { Component } from "react";
import SideNav from "../sideNav/SideNav";
import SearchBar from "../serachBar/SearchBar";
import PostMessageBar from "../postMessageBar/PostMessageBar";
import MessagesList from "../messages/messagesList/MessagesList";
import { connect } from "react-redux";
import { fetchMessages } from "./../../store/actions/messageAction";

export class DashBoard extends Component {
  componentDidMount() {
    fetchMessages();
  }
  render() {
    console.log("messages", this.props.messages);
    return (
      <div className='DashBoardWrapper'>
        <div className='row'>
          <div className='col-2'>
            <SideNav />
          </div>
          <div className='col'>
            <SearchBar />
            <MessagesList messages={this.props.messages} />
            <PostMessageBar />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages.items };
};

export default connect(
  mapStateToProps,
  fetchMessages
)(DashBoard);
