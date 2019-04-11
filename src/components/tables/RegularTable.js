import React from "react";
import BodyItem from "./BodyItem";
import PropTypes from "prop-types";

const RegularTable = ({ headers, bodyTexts }) => {
  return (
    <table className="ui celled table table-styled">
      <thead>
        <tr>
          {headers && headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      {bodyTexts &&
        bodyTexts.map(body => {
          return <BodyItem key={body.id} body={body} />;
        })}
    </table>
  );
};

RegularTable.propTypes = {
  headers: PropTypes.array.isRequired,
  bodyTexts: PropTypes.array
};

export default RegularTable;
