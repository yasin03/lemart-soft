import PageTitle from "@/componenets/common/PageTitle";
import ProjectItem from "@/componenets/project/ProjectItem";
import React from "react";

const Page = () => {
  return (
    <>
      <PageTitle title="Projelerimiz" />
      {/* project area start */}
      <div className="project-area bg-relative pd-top-120">
        <div className="container">
          <div className="row">
            <ProjectItem
              image="turkreklam"
              url="http://www.afyonturkreklam.com/"
              title="Turk Reklam"
              subTitle="Full Stack Web Page"
            />
            <ProjectItem
              image="detayyapi"
              url="http://www.afyondetayyapi.com/"
              title="Detay Yapı"
              subTitle="Web Page"
            />
            <ProjectItem
              image="turkreklam"
              url="http://www.afyonturkreklam.com/"
              title="Turk Reklam"
              subTitle="Full Stack Web Page"
            />
          </div>
        </div>
      </div>
      {/* project area end */}
    </>
  );
};

export default Page;
