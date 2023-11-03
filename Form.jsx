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
  const FormTitles = [
    "Account Type",
    "Earn Plan",
    "About Member",
    "Create Username",
    "Upload Pic",
    "Interests",
  ];
  const pageComponents = [
    <AcctType />,
    <EarnPlan />,
    <AboutMember />,
    <CreateUsername />,
    <UploadProfilePic />,
    <Interest />,
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
    console.log('submitted')
  }
   const PageDisplay = () => {
    return pageComponents[page] || <h1>Error</h1>;
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">{FormTitles[page]}</div>
        <div className="body">
          <PageDisplay />
        </div>
        <div className="footer">
        {page > 0 && (
            <Button className="prev-button" onClick={handlePrevClick} text="Previous" />
          )}
           {page < pageComponents.length - 1 ? (
            <Button className="next-button" onClick={handleNextClick} text="Next" />
          ) : (
            <Button className="submit-button" onClick={handleSubmit} text="Submit" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
