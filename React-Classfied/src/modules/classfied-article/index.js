import React from 'react';
import PropTypes from 'prop-types';

import './classified-article.scss';

const ClassifiedArticle = ({articleData={}, sectionTitle}) => (
    <div className="ClassifiedArticle__MainArticle">
        <div className="ClassifiedArticle__SectionHeading">{sectionTitle}</div>
        <article className="ClassifiedArticle__ArticleContainer">
            <h2 className="ClassifiedArticle__ArticleHeading"><a href={articleData.link}>{articleData.title}</a></h2>
            <div className="ClassifiedArticle__ArticleBody">
                <p className="ClassifiedArticle__ArticleBodyText">
                    {articleData.description}
                    <br/>
                    <a className="ClassifiedArticle__ArticleExternalLink" href={articleData.externalLink}>{articleData.externalLinkName}</a>
                </p>
                <img className="ClassifiedArticle__ArticleImage" src={articleData.image}/>
            </div>

        </article>
    </div>
);

ClassifiedArticle.propTypes = {
    articleData: PropTypes.object,
    sectionTitle: PropTypes.string
};

export default ClassifiedArticle;
