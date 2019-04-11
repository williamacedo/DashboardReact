import React, { Component } from "react";
import SimpleInput from "../../forms/SimpleInput";
import TextArea from "../../forms/TextArea";
import ButtonSubmit from "../../buttons/ButtonSubmit";
import {
  handleName,
  handleDescription,
  createJob
} from "../../../actions/jobActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registred: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.name != "") {
      this.props.createJob(this.props.name, this.props.description);
    }
  }

  render() {
    if (this.props.jobStatus === true) return <Redirect to="/jobs" />;
    return (
      <form className="ui form" onSubmit={e => this.handleSubmit(e)}>
        <h4 className="ui dividing header">Create Job</h4>
        <SimpleInput
          textLabel="Job"
          type="text"
          name="job"
          placeholder="Write your job"
          textChange={this.props.handleName}
          textValue={this.props.name}
        />
        <TextArea
          labelText="Description"
          placeholder="Write your job description"
          textChange={this.props.handleDescription}
          textValue={this.props.description}
        />
        <ButtonSubmit text="Submit" styled="right floated green" />
      </form>
    );
  }
}

const mapToStateToProps = state => {
  return {
    name: state.job.name,
    description: state.job.description,
    jobStatus: state.job.jobStatus
  };
};

export default connect(
  mapToStateToProps,
  { handleName, handleDescription, createJob }
)(CreateJob);
