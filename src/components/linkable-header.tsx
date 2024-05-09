import React from "react";

export interface LinkableHeaderProps {
  content: string;
  lower?: boolean;
}

export const LinkableHeader = ({
  content,
  lower = false,
}: LinkableHeaderProps): JSX.Element => {
  const id = content.replace(/\W+/g, "-");
  return React.createElement(
    lower ? "h3" : "h2",
    { id },
    <a href={`#${id}`}>
      <span className="hash"># </span>
      {content}
      <span className="hash"> #</span>
    </a>
  );
};
