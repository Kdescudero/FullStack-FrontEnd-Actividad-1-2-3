import React, { Component } from "react";

class Form extends Component {
  state = {
    form: {
      name: "",
      description: "",
      basePrice: "",
      taxRate: "",
      state: "",
      inventory: "",
    },
  };

  handleOnchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      form: { ...this.state.from, [name]: value },
    });
  };

  render() {
    return (
      <form className="mt-3" autoComplete="off">
        <div className="form-col">
          <div className="form-group col-md-6">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={this.handleOnchange}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="description">Descripción</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={this.handleOnchange}
            />
          </div>
        </div>

        <div className="form-col">
          <div className="form-group col-md-6">
            <label htmlFor="basePrice">Precio Base</label>
            <input
              type="text"
              className="form-control"
              id="basePrice"
              name="basePrice"
              onChange={this.handleOnchange}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="taxRate">Tasa de impuesto</label>
            <input
              type="text"
              className="form-control"
              id="taxRate"
              name="taxRate"
              onChange={this.handleOnchange}
            />
          </div>
        </div>

        <div className="form-col">
          <div className="form-group col-md-6">
            <label htmlFor="state">Estado</label>
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              onChange={this.handleOnchange}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inventory">Inventario</label>
            <input
              type="text"
              className="form-control"
              id="inventory"
              name="inventory"
              onChange={this.handleOnchange}
            />
          </div>
        </div>

        <div className="form-group col-md-6">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
