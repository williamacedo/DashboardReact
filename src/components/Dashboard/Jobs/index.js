import React, { Component } from "react";
import RegularButtonWithIcon from "../../buttons/RegularButtonWithIcon";
import RegularTable from "../../tables/RegularTable";
import { getJobs } from "../../../actions/jobActions";
import { connect } from "react-redux";

class Jobs extends Component {
  componentDidMount() {
    this.props.getJobs();
  }

  render() {

    let renderItem = () => {
      if(this.props.jobs.length != '0') {
        return <RegularTable headers={["Name", "Description"]} bodyTexts={this.props.jobs} />;
      } else {
        return <div>Loading..</div>;
      }
    }

    return (
      <div>
        <div className="ui clearing segment">
          <RegularButtonWithIcon
            text="Create Job"
            styled="primary"
            icon="plus"
            link="/jobs/create"
          />
        </div>
        <div className="ui clearing segment">
          {renderItem()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.job.jobs
  };
};

export default connect(
  mapStateToProps,
  { getJobs }
)(Jobs);
