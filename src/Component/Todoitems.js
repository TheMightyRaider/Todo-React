import React from "react";

class Todoitems extends React.Component {
  handleChange = (e) => {
    this.props.markComplete(e.target.checked, e.target.id);
  };

  render() {
    return (
      <div>
        <input type="text" value={this.props.task}></input>
        <input
          type="checkBox"
          id={this.props.id}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

export default Todoitems;
