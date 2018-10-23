import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const index = ({ code }) => {
  return (
    <LiveProvider code={code.trim()}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};

export default index;
