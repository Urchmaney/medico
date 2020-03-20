import React from 'react';
import PropTypes from 'prop-types';

const Status = (props) => {
  const { detail, payment, confirm } = props;
  return (
    <div className="status-bar">
      <div className="status">
        <span style={{ backgroundColor: detail ? '#2cbba9' : 'white' }} />
        <p>Details</p>
      </div>
      <div className="status">
        <span style={{ backgroundColor: payment ? '#2cbba9' : 'white' }} />
        <p>Payment</p>
      </div>
      <div className="status">
        <span style={{ backgroundColor: confirm ? '#2cbba9' : 'white' }} />
        <p>Confirmation</p>
      </div>
    </div>
  );
};

Status.propTypes = {
  detail: PropTypes.bool,
  payment: PropTypes.bool,
  confirm: PropTypes.bool,
};

Status.defaultProps = {
  detail: false,
  payment: false,
  confirm: false,
};

export default Status;
