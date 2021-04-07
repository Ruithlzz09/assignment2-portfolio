import React from "react";

const CopyRight = () => {
  return (
    <div>
      {/* <!-- Copyright Section--> */}
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright © Your Website 2020</small>
        </div>
      </div>
      {/*<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
      <div className="scroll-to-top d-lg-none position-fixed">
        <a
          className="js-scroll-trigger d-block text-center text-white rounded"
          href="#page-top"
        >
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
    </div>
  );
};

export default CopyRight;
