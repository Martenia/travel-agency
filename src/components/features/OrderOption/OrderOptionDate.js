import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionDate = ({currentValue, setOptionValue}) => (  
  <div>
    <DatePicker className={styles.input} selected={currentValue} 
      onChange={date => setOptionValue(date)} placeholderText={'Start Date'} />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;