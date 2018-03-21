import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../../modules/tabs';
import ClassifiedContent from '../../modules/classified-content';
import {TAB_NAME_REAL_ESTATE, tabConfig} from '../../helpers/configuration';
import {data} from '../../helpers/data';

import './classifieds.scss';

class ClassifiedPage extends React.Component {

    constructor( props ) {
        super( props );
        /**
         * Setup the Default State of the Application with default Selection for the tabs
         **/
        this.state = {
            selectedTabName: TAB_NAME_REAL_ESTATE
        }
    }

    handleTabChange = ( selectedTabName ) => {
        if ( selectedTabName !== this.state.selectedTabName ) {
            this.setState( {selectedTabName} );
        }
    };

    render() {
        let {selectedTabName} = this.state;

        return (
            <div className="Classifieds__Container">
                <div className="Classifieds__ComponentContainer">
                    <Tabs tabConfig={tabConfig} selectedTabName={selectedTabName} onTabChange={this.handleTabChange}/>
                    <ClassifiedContent data={data[selectedTabName]}/>
                </div>
            </div>
        )
    }
}


export default ClassifiedPage;
