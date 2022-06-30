import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    //create component for formik
    initialValues: {
      email: "",
      pswd: "",
    }, //Attention this must defined in Object format, therefore, a coma is required
    onSubmit: (values) => {
      console.log("form:", values);
      let errors ={};
      if (values.email && values.pswd)
        errors.success = alert("Login Successful");
      return errors;
    },

    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "field required";
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.emailValidation = "username should be an email";
      if (!values.pswd) errors.pswd = "field required";
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} id="form">
        <div class="form-group" style={{ marginBottom: "0px" }}>
          <label for="exampleInputEmail1">username</label>
        </div>
        <input
          name="email"
          type="text"
          id="emailField"
          onChange={formik.handleChange}
          value={formik.values.email}
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          style={{ marginTop: "0px" }}
        />
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
        {formik.errors.emailValidation ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.emailValidation}
          </div>
        ) : null}
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
        <div class="form-group">
          <label for="pswField" style={{ marginBottom: "0px" }}>
            password
          </label>
        </div>
        <input
          name="pswd"
          type="text"
          id="pswField"
          onChange={formik.handleChange}
          value={formik.values.pswd}
          class="form-control"
          placeholder="password"
          style={{ marginTop: "0px" }}
        />
        {formik.errors.pswd ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.pswd}
          </div>
        ) : null}
        <button
          type="submit"
          id="submitBtn"
          class="btn btn-primary btn-lg"
          style={{ marginTop: "5px" }}
        >
          <strong>Submit</strong>
        </button>
        {formik.errors.success ? (
          <div id="loginValid" style={{ color: "red" }}>
            {formik.errors.success}
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default App;
