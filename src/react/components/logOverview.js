import React from 'react';
import { connect } from 'react-redux';

const LogOverview = (props) => {
  return (
    <div className="logSection">
      
      <h4>Previous calculations</h4>

      {
        (props.logs.length) 
        ?
          props.logs.map(log => {
            return (
              <div key={log.id}>
                <code>[{log.valueLeft} {log.operator} {log.valueRight} = {log.result}]</code>
              </div>
            );
          }) 
        :
          <p>No operations logged</p>        
      }

    </div>
  );
}

const mapStateToProps = (state) => ({
  logs: state.Logs
});

export default connect(mapStateToProps)(LogOverview);