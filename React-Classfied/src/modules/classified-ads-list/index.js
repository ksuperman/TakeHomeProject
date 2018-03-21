import React from 'react';
import PropTypes from 'prop-types';

import './classified-ads-list.scss';

const ClassifiedAdsList = ({ads={}}) => (
    <div className="ClassifiedAdsList__AdsContainer">
        {ads.title && <div className="ClassifiedAdsList__SectionHeading">{ads.title}</div>}
        <ul className="ClassifiedAdsList__AdLinks">
            {(ads.links || []).map((ad={}, index)=><li key={`ads-link-${index}`} className="ClassifiedAdsList__AdLink"><a href={ad.link}>{ad.title}</a></li>)}
        </ul>
    </div>
);

ClassifiedAdsList.propTypes = {
    ads: PropTypes.object
};

export default ClassifiedAdsList;
