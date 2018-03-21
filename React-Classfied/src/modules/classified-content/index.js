import React from 'react';
import PropTypes from 'prop-types';
import ClassifiedArticle from '../classfied-article';
import ClassifiedAdsList from '../classified-ads-list';
import ClassifiedAdsPanel from '../classified-ads-panel';

import './classified-content.scss';

const ClassifiedContent = ({data={}}) => {
    let {articleData, sectionTitle, adsData, bottomAdsData={}} = data;
    return(
        <div className="ClassifiedContent__Container">
            <section className="ClassifiedContent__TopContainer">
                <ClassifiedArticle articleData={articleData} sectionTitle={sectionTitle}/>
                <aside className="ClassifiedContent__Ads">
                    <ClassifiedAdsList ads={adsData}/>
                </aside>
            </section>
        <section className="ClassifiedContent__BottomContainer">
            <ClassifiedAdsPanel ads={bottomAdsData} />
        </section>
        <a href="javascript:void(0)" className="ClassifiedContent__PlaceAdsLink">
            Place a Classified Ad >>
        </a>
        </div>
    )
};

ClassifiedContent.propTypes = {
    data: PropTypes.object
};

export default ClassifiedContent;
