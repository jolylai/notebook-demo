import React from 'react';

// import BasicLayout from "./BasicLayout";
import StandardLayout from './StandardLayout';

const index = props => {
  return (
    <div>
      <StandardLayout {...props} />
    </div>
  );
};

export default index;
