import React from "react";
import "./Login.scss";
// import HomeHeader from "../layout/HomeHeader/HomeHeader";
import { Link } from "react-router-dom";
import HomeFooter from "../layout/HomeFooter/HomeFooter";

function Login() {
  // const [showPassword, setShowPassword] = useState(false);

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
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Email"
                  />
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Mật khẩu"
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Ghi nhớ mật khẩu
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Quên mật khẩu?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Đăng Nhập
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Chưa có tài khoản?{" "}
                    <Link to="/register" className="link-danger">
                      {" "}
                      Đăng Kí
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <HomeFooter />
    </>
  );
}

export default Login;
