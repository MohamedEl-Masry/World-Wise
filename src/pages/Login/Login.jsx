/*eslint-disable react/prop-types*/

import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import styles from "./login.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Login = ({ getUserData }) => {
  let navigate = useNavigate();
  let user = {
    email: "Mohamed@example.com",
    password: "m123123",
  };
  let userLogin = (values) => {
    if (values.email === user.email && values.password === user.password) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/app", { replace: true });
      getUserData();
      toast.success("success", {
        duration: 4000,
        className: "mt-5 pt-5",
        position: "bottom-center",
      });
    }
  };
  let formik = useFormik({
    initialValues: user,
    onSubmit: (values) => {
      userLogin(values);
    },
    validate: function (values) {
      let errors = {};

      if (!values.email.includes("@") || !values.email.includes(".com")) {
        errors.email = "email must be includs @ and .com";
      }
      if (values.password.length < 7 || values.password.length > 15) {
        errors.password = "password must be 7 to 15 characters";
      }
      return errors;
    },
  });

  return (
    <>
      <div className={styles.login}>
        <div className="nav position-relative ">
          <Navbar />
        </div>
        <div className="login container mt-5">
          <div className="row">
            <div className="col-md-12 mt-5">
              <div className="mt-5">
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                  <div className={styles.row}>
                    <label htmlFor="email">Email</label>
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="form-control fs-3 bg-body-secondary"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="alert alert-danger py-1 mt-1 mb-1 ">
                        {formik.errors.email}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={styles.row}>
                    <label htmlFor="password">Password</label>
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="form-control fs-3 bg-body-secondary"
                      autoComplete=""
                    />
                    {formik.errors.password && formik.touched.password ? (
                      <div className="alert alert-danger py-1 mt-1 mb-1 ">
                        {formik.errors.password}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="">
                    <button type="submit" className={styles.btnForm}>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
