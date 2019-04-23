import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    return this.props.surveys;
    //    return this.props.surveys.map(survey => {
    //      return (
    //        <div className="card darken-1" key={survey._id}>
    //          <div className="card-content">
    //            <span className="card-title" />
    //          </div>
    //        </div>
    //      );
    //    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
