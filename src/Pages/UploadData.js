import React, { Component } from "react";
import Layout from '../shared/Layout';
import { Editor } from '@tinymce/tinymce-react';
import "./UploadData.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class UploadData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applicationName: null,
      title: null,
      collection: null,
      tag: null,
      content: null,
      formErrors: {
        applicationName: "",
        title: "",
        content: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Application Name: ${this.state.applicationName}
        Title: ${this.state.title}
        Collection: ${this.state.collection}
        Tag: ${this.state.tag}
        Content: ${this.state.content}
      `);
      this.props.history.push("/");
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "application":
        formErrors.applicationName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "title":
        formErrors.title =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <Layout>
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Content Managment</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="application">
              <label htmlFor="application">Application*</label>
              <input
                className={formErrors.applicationName.length > 0 ? "error" : null}
                placeholder="enter application name"
                type="text"
                name="application"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.applicationName.length > 0 && (
                <span className="errorMessage">{formErrors.applicationName}</span>
              )}
            </div>
            <div className="title">
              <label htmlFor="title">Title*</label>
              <input
                className={formErrors.title.length > 0 ? "error" : null}
                placeholder="title"
                type="text"
                name="title"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.title.length > 0 && (
                <span className="errorMessage">{formErrors.title}</span>
              )}
            </div>
            <div className="collection">
              <label htmlFor="collection">Collection</label>
              <input
                placeholder="Enter collection group for article"
                type="text"
                name="collection"
                noValidate
                onChange={this.handleChange}
              />
             
            </div>
            <div className="tag">
              <label htmlFor="tag">Tag</label>
              <input
                placeholder="Enter tags for article"
                type="text"
                name="tag"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="content">
              <label htmlFor="content">Content</label>
              {/* <textarea 
                className="form-control rounded-0" 
                id="exampleFormControlTextarea1" 
                placeholder="Enter article content"
                rows="10"
                noValidate
                onChange={this.handleChange}
                >
                </textarea> */}
                <Editor
                  initialValue="<p>This is the initial content of the editor</p>"
                  init={{
                    plugins: 'link image code',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                  }}
                  onChange={this.handleEditorChange}
                />
              {formErrors.content.length > 0 && (
                <span className="errorMessage">{formErrors.content}</span>
              )}
            </div>
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
            <div className="clearAll">
              <button type="submit">Clear</button>
            </div>
          </form>
        </div>
      </div>
      </Layout>
    );
  }
}

export default UploadData;
