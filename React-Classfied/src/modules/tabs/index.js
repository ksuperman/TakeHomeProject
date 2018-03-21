import React from 'react';
import PropTypes from 'prop-types';
import TabItem from '../tab-item';

import './tabs.scss';

class Tabs extends React.Component {

    /**
     * `propTypes` help react validate the properties being passed to the component.
     **/
    static propTypes = {
        tabConfig: PropTypes.object.isRequired,
        selectedTabName: PropTypes.string,
        onTabChange: PropTypes.func
    };

    static defaultProps = {
        onTabChange: ()=>{}
    };

    handleTabChange = (event) => {
        let tabName = event && event.currentTarget.getAttribute('data-tab-name');
        let {onTabChange} = this.props;
        onTabChange(tabName);
    };

    render() {
        let {tabConfig, selectedTabName} = this.props;
        let tabs = Object.keys(tabConfig);

        return (
            <nav className="Tabs__Container">
                <ul className="Tabs__Wrapper">
                    {tabs.map((tab, index)=><li className="TabItem__ItemContainer" key={`tab-index-${index}`} data-tab-name={tab} onClick={this.handleTabChange}><TabItem tabDisplayName={tabConfig[tab]} selected={selectedTabName === tab}/></li>)}
                </ul>
            </nav>
        )
    }
}

export default Tabs;
