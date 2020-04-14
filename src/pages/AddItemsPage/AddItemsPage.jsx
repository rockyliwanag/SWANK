import React, { Component } from "react";

class NewItemPage extends Component {
  fileUploaded = (e) => {
    console.log(e.target);
  };

  render() {
    return (
      <>
        <h1>ADD ITEM</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <input type="file" onChange={this.fileUploaded} />
        </form>
      </>
    );
  }
}

export default NewItemPage;
