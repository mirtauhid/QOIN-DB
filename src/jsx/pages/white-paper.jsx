import React from "react";
import Header3 from "../layout/header3";
import Pdf from '../../document/PDF.pdf';

function WhitePaper() {
  return (
    <>
      <Header3 />
      {/* <Sidebar /> */}


      <iframe src={Pdf} width="100%" height="800"></iframe>
    </>
  );
}

export default WhitePaper;
