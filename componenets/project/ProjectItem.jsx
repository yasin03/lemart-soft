import Link from "next/link";
import React from "react";

const ProjectItem = ({ image, url, title, subTitle }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-case-study-inner">
        <div className="thumb ">
          <img src={`img/project/${image}.png`} alt="img" />
        </div>
        <div className="details shadow">
          <h5>
            <Link href="/project">{title}</Link>
          </h5>
          <h6>{subTitle}</h6>
          <a className="right-arrow" href={url} target="_blank">
            <i className="fa fa-angle-double-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
