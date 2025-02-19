import React from 'react';
import pdfFile from './resume/siam.pdf';

export const Resume = () => {
  return (
    <div>
      <h2 align="center" style={{fontSize:"50px",fontWeight:"600"}}>My Resume</h2>
      <iframe
        src={pdfFile}
        width="100%"
        height="600px"
        title="Resume"
        

      ></iframe>
      <br />
      <a href={pdfFile} download="siam_resume.pdf">
        <button align="center">Download Resume</button>
      </a>
    </div>
  );
};






