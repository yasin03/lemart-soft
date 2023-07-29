import Link from "next/link";
import React from "react";

const PageTitle = ({ title }) => {
  return (
    <>
      {/* page title start */}
      <div
        className="breadcrumb-area bg-cover"
        style={{ backgroundImage: 'url("img/bg/7.png")' }}
      >
        <div className="container">
          <div className="breadcrumb-inner">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h2 className="page-title">{title}</h2>
              </div>
              <div className="col-lg-6 text-lg-end">
                <ul className="page-list"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page title end */}
    </>
  );
};

export default PageTitle;
