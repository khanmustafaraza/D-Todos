import React from "react";

const Hero = () => {
  return (
    <section className=" py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side — Text */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-5 fw-bold text-primary">
              Welcome to Your To-Do App
            </h1>
            <p className="lead text-muted">
              Stay productive and organized every day. Manage your tasks easily
              and never miss a deadline again!
            </p>
            <button className="btn btn-success btn-lg">Get Started</button>
          </div>

          {/* Right side — Image or Illustration */}
          <div className="col-lg-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
              alt="To-Do Illustration"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
