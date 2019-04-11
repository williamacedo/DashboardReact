import React from "react";
import SimpleInput from "./SimpleInput";
import TextArea from "./TextArea";
import RegularButtonWithIcon from "../buttons/RegularButtonWithIcon";
import PropTypes from "prop-types";

const SimpleForm = props => {
  return (
    <form className="ui form">
      <SimpleInput
        textLabel="Job"
        type="text"
        name="job"
        placeholder="Write your job"
      />
      <TextArea
        labelText="Description"
        placeholder="Write your job description"
      />
      <RegularButtonWithIcon
        text="Submit"
        icon="chevron circle down"
        type="green"
        link="/jobs"
      />
    </form>
  );
};

SimpleForm.propTypes = {
  headerText: PropTypes.string
};

export default SimpleForm;
