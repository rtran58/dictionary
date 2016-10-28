import React from 'react';

const InputLabel = (props) => {
  let renderLabel = null;

  if (props.label && props.icon) {
    renderLabel = 
      <span>
        <span className={`fa fa-{props.icon}`} />
        &nbsp;
        {props.label}
      </span>;
  }

  if (!props.label && props.icon) {
    <span className={`fa fa-{props.icon}`} />
  }

  if (props.label && !props.icon) {
    renderLabel = props.label;
  }

  const renderClass = props.className 
    ? `input__label ${props.className}`
    : 'input__label';

  return (
    <span {...props} className={renderClass}>
      {renderLabel}
    </span> 
  );
}

InputLabel.propTypes = {
  label: React.PropTypes.string,
  icon: React.PropTypes.string
};

export default InputLabel;