import React, { useState } from "react";
import "./Register.scss";
import HomeHeader from "../layout/HomeHeader/HomeHeader";

function Register(props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom" style={{ height: "inherit" }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sampleimage"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Họ và Tên"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Email"
                  />
                </div>

                <div className="form-outline mb-3">
                  <input
                    type={showPassword === true ? "text" : "password"}
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Mật khẩu"
                  />
                  <i
                    className={
                      showPassword === true
                        ? "fa-solid fa-eye"
                        : "fa-solid fa-eye-slash"
                    }
                    style={{
                      position: "absolute",
                      marginTop: "-29px",
                      marginLeft: "450px",
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Đăng Kí
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
