import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, setOptionValue, currentValue, required}) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div className={styles.icon} onClick={() => setOptionValue('')}>
        <Icon className={styles.icon} name={'times-circle'}>none</Icon>
      </div>)}

    {values.map(value => (
      <div key={value.id} className={currentValue===value.id ? styles.iconActive : styles.icon} onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon} />{value.name} {'-'} {formatPrice(value.price)}
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes= {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  required: PropTypes.bool,
};

export default OrderOptionIcons;