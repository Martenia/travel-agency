import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({setOptionValue}) => (
  <div>
    <input className={styles.input} type='text' placeholder='Enter the information here' 
      onChange={event => setOptionValue(event.currentTarget.value)}/>
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;