import React from 'react';
import PropTypes from 'prop-types';

import './tab-item.scss';

const TabItem = ({tabDisplayName, selected}) => <button className={`TabItem__Item ${selected? 'TabItem__Item--Selected': ''}`}>{tabDisplayName}</button>;

TabItem.propTypes = {
    tabDisplayName: PropTypes.string.isRequired,
    selected: PropTypes.bool
};

export default TabItem;
