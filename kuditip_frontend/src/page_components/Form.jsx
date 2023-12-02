import React, { useState } from "react";
import AcctType from "./AcctType";
import EarnPlan from "./EarnPlan";
import AboutMember from "./AboutMember";
import CreateUsername from "./CreateUsername";
import UploadProfilePic from "./UploadProfilePic";
import Interest from "./Interest";
import Button from "../unit_components/Button";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formdata, setFormdata] = useState({
    acctType: "",
    earnPlan: "",
    aboutMember: "",
    username: "",
    uploadProfilePic: "",
    interest: [],
  });
  console.log(formdata)

  const pageComponents = [
    <AcctType formdata={formdata} setFormdata={setFormdata} />,
    <EarnPlan formdata={formdata} setFormdata={setFormdata} />,
    <AboutMember formdata={formdata} setFormdata={setFormdata} />,
    <CreateUsername formdata={formdata} setFormdata={setFormdata} />,
    <UploadProfilePic formdata={formdata} setFormdata={setFormdata} />,
    <Interest formdata={formdata} setFormdata={setFormdata} />,
  ];
  const handlePrevClick = (e) => {
    e.preventDefault();
    setPage((prevPage) => prevPage - 1);
  };
  const handleNextClick = (e) => {
    e.preventDefault();
    setPage((prevPage) => prevPage + 1);
  };

  const handleSubmit = () => {
    alert("submitted");
  };
  const PageDisplay = () => {
    return pageComponents[page] || <h1>Error</h1>;
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="body">
          <PageDisplay />
        </div>
        <div className="footer">
          {page > 0 && (
            <Button
              className="prev-button"
              onClick={handlePrevClick}
              text="Previous"
            />
          )}
          {page < pageComponents.length - 1 ? (
            <Button
              className="next-button"
              onClick={handleNextClick}
              text="Continue"
            />
          ) : (
            <Button
              className="submit-button"
              onClick={handleSubmit}
              text="Submit"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
