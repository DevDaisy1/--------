import React from "react";

const userInput: string = "<img src=x onerror=alert('XSS') />";

export const VulnerableComponent: React.FC = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: userInput }} />
  );
};
