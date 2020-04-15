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
      itemType: null,
      description: "",
      value: "",
      pictures: [],
    },
  };

  formRef = React.createRef();

  // fileUploaded = (e) => {
  //   console.log(e.target);
  // }

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
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  handleSelection = (itemType) => {
    this.setState({ itemType }, () =>
      console.log(`Option selected:`, this.state.formData.itemType)
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
              <label>ITEM TYPE (required)</label>
              <Select
                // className="form-control"
                name="itemType"
                value={itemType}
                onChange={this.handleSelection}
                options={options}
                required
              />
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
              </div>
            </div>
            <input type="file" onChange={this.fileUploaded} />
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