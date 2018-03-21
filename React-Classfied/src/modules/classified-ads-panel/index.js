import React from 'react';
import PropTypes from 'prop-types';

import './classified-ads-panel.scss';

const ClassifiedAdsPanel = ({ads={}}) => (
    <div className="ClassifiedAdsPanel__AdsContainer">
        <img className="ClassifiedAdsPanel__BottomMainAdImage" src={ads.main_image}/>
        <aside className="ClassifiedAdsPanel__Ads">
            <ul className="ClassifiedAdsPanel__AdLinks">
                {(ads.links || []).map((ad={}, index)=><li key={`panel-ads-link-${index}`} className="ClassifiedAdsPanel__AdLink"><a href={ad.link}>{ad.title}</a></li>)}
            </ul>
            <img className="ClassifiedAdsPanel__SideAdImage" src={ads.side_image}/>
        </aside>
    </div>
);

ClassifiedAdsPanel.propTypes = {
    ads: PropTypes.object
};

export default ClassifiedAdsPanel;
