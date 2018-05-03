import React from 'react';
import { connect } from 'react-redux';

const LogOverview = (props) => {
  return (
    <div className="logSection">
      <h4>Previous calculations</h4>
      {
        props.logs.map(log => {
          return (
            <div key={log.timeStamp}>
              <code>{log.valueLeft} {log.operator} {log.valueRight} = {log.result}</code>
            </div>
          );
        })
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  logs: state.Logs
});

export default connect(mapStateToProps)(LogOverview);