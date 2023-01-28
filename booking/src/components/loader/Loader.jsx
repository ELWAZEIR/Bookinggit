import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <div className="d-flex justify-content-center align-items-center">
    <ContentLoader
      speed={2}
      width={1024}
      height={300}
      viewBox="0 0 1024 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="6" y="34" rx="0" ry="0" width="1024" height="250" />
    </ContentLoader>
  </div>
);

export default Loader;
