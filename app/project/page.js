import React from "react";

const Page = () => {
  return (
    <>
      {/* project area start */}
      <div className="project-area bg-relative pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <img src="img/case-study/1.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <a href="project-details.html">Tecnology Farms</a>
                  </h5>
                  <a className="cat" href="#">
                    Las vegas
                  </a>
                  <a className="right-arrow" href="#">
                    <i className="fa fa-angle-double-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <img src="img/case-study/2.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <a href="project-details.html">Tecnology Farms</a>
                  </h5>
                  <a className="cat" href="#">
                    Las vegas
                  </a>
                  <a className="right-arrow" href="#">
                    <i className="fa fa-angle-double-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <img src="img/case-study/3.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <a href="project-details.html">Tecnology Farms</a>
                  </h5>
                  <a className="cat" href="#">
                    Las vegas
                  </a>
                  <a className="right-arrow" href="#">
                    <i className="fa fa-angle-double-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* project area end */}
    </>
  );
};

export default Page;
