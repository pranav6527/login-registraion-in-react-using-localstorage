import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavItem, Container, Row, Col } from "react-bootstrap";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    };
  }

  onChangeFirstName = (e) => {
    this.setState({ firstname: e.target.value });
  };

  onChangeLastName = (e) => {
    this.setState({ lastname: e.target.value });
  };

  onChangeUserName = (e) => {
    this.setState({ username: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmit = (e) => {
    let { history } = this.props;

    let ob = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    let olddata = localStorage.getItem("formdata");
    if (olddata == null) {
      olddata = [];
      olddata.push(ob);
      localStorage.setItem("formdata", JSON.stringify(olddata));
    } else {
      let oldArr = JSON.parse(olddata);
      oldArr.push(ob);
      localStorage.setItem("formdata", JSON.stringify(oldArr));
    }
    history.push({ pathname: "/login" });
  };

  render() {
    return (
      <Container className="mt-3 w-50">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>FirstName</label>
            <input
              type="text"
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangeFirstName}
              required
            />
          </div>
          <div className="form-group">
            <label>LastName</label>
            <input
              type="text"
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeLastName}
              required
            />
          </div>
          <div className="form-group">
            <label>UserName</label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserName}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={this.props.onRegister}
          >
            Register
          </button>
        </form>
      </Container>
    );
  }
}

export default Register;
