import React from "react";
import PropTypes from "prop-types";

const Message = ({ msg }) => {
  return (
    <div className='ui info message right grid' id='msg'>
      {msg}
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Message;
