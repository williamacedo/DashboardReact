import React from "react";

const BodyItem = ({ body }) => {
  return (
    <tbody>
      <tr>
        <td>{body.name}</td>
        <td>{body.description}</td>
      </tr>
    </tbody>
  );
};

export default BodyItem;
