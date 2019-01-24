import React from 'react';
import './Login.css';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {  val.length > 0 && (valid = false);  });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => { val === null && (valid = false);  });
  
    return valid;
  };

class Login extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: '',
        formErrors: {
            email: "",
            password: ""
          }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`
              --SUBMITTING--
              Email: ${this.state.email}
              Password: ${this.state.password}
            `);
            this.props.history.push("/dataupload");
          } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
          }
    }
    
      handleChange(e) {
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "email":
            formErrors.email = emailRegex.test(value) ? "" : "invalid email address";
            break;
          case "password":
            formErrors.password = value.length < 6 ? "minimum 6 characaters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      }

  render() {
    const { formErrors } = this.state;

    return (        
    <div className="login-wrapper">
        <div className="login-form-wrapper">
            <h1>Admin Login</h1>
            <form onSubmit={this.handleSubmit} noValidate>
                <div className="email">
                <label htmlFor="email">Email</label>
                <input
                    className={formErrors.email.length > 0 ? "error" : null}
                    placeholder="Email"
                    type="email"
                    name="email"
                    noValidate
                    onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                )}
                </div>
                <div className="password">
                <label htmlFor="password">Password</label>
                <input
                    className={formErrors.password.length > 0 ? "error" : null}
                    placeholder="Password"
                    type="password"
                    name="password"
                    noValidate
                    onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                )}
                </div>
                <div className="login">
                <button type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
    );
  }
}

export default Login;