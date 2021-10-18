import React, { Component } from "react";
import Select from "react-select";

const options = [
  { value: "accessories", label: "ACCESSORIES" },
  { value: "clothes", label: "CLOTHES" },
  { value: "collectibles", label: "COLLECTIBLES" },
  { value: "electronics", label: "ELECTRONICS" },
  { value: "furnitiure", label: "FURNITURE" },
  { value: "jewelry", label: "JEWELRY" },
  { value: "sports/outdoors/hobbies", label: "SPORTS/OUTDOORS/HOBBIES" },
  { value: "toys", label: "TOYS" },
  { value: "transportation", label: "TRANSPORTATION" },
];

class AddItemsPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: "",
      value: "",
      itemType: "",
      description: "",
      pictures: [],
    },
  };

  formRef = React.createRef();

  fileUploaded = (e) => {
    console.log(e.target);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddItem(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData: formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  handleSelection = (itemType) => {
    const formData = {
      ...this.state.formData,
      itemType: itemType.value,
    };
    this.setState({ itemType: itemType, formData: formData }, () =>
      console.log(`Option selected:`, this.state.itemType)
    );
  };

  render() {
    const { itemType } = this.state.formData;
    return (
      <>
        <h1>ADD ITEM</h1>
        <div className="Page-container">
          <form
            ref={this.formRef}
            autoComplete="off"
            onSubmit={this.handleSubmit}
            method="POST"
            action='/'
            enctype="multipart/form-data"
          >
            <div className="form-group">
              <label>NAME (required)</label>
              <input
                className="form-control"
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                placeholder="ITEM NAME"
                required
              />
            </div>
            <div className="form-group">
              <label>VALUE (required)</label>
              <div className="input-group">
                <span className="input-group-addon">$</span>
                <input
                  className="form-control"
                  type="text"
                  name="value"
                  value={this.state.formData.value}
                  onChange={this.handleChange}
                  aria-label="VALUE"
                  required
                />
                <span className="input-group-addon">.00</span>
              </div>
              <div className="form-group">
                <label>ITEM TYPE (required)</label>
                <Select
                  // className="form-control"
                  name="itemType"
                  value={itemType}
                  onChange={this.handleSelection}
                  placeholder={
                    this.state.itemType
                      ? this.state.itemType.label
                      : "select an item"
                  }
                  options={options}
                  required
                />
              </div>
              <div className="form-group">
                <label>DESCRIPTON (required)</label>
                <textarea
                  className="form-control well well-lg"
                  name="description"
                  value={this.state.formData.description}
                  onChange={this.handleChange}
                  placeholder="DESCRIPTION"
                  required
                />
              </div>
            </div>
            <input type="file" name='photos'onChange={this.fileUploaded} />
            <button
              type="submit"
              className="btn btn-default"
              disabled={this.state.invalidForm}
            >
              ADD ITEM
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AddItemsPage;
