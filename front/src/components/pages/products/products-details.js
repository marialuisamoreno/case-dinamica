import React, { Component } from 'react';
import Product from './products';
import Logs from './logs';
import Topbar from '../../shared/topbar/topbar';
import Sidebar from '../../shared/sidebar/sidebar';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    changTab = (value) => {
        this.setState({ activeTab: value })
    }

    render() {
        const { activeTab } = this.state;       
        
        return (
            <div>
                <Topbar />
                <Sidebar />                
                <div className="title">
                    Product Details
                </div>
                <div className="containerPackages">
                    <div className="rowTables"> 
                        <div className={activeTab === 0 ? 'tab active' : 'tab'} onClick={() => this.changTab(0)}>
                            Products
                            <div className={activeTab === 0 ? 'lineActive active' : 'lineActive'}></div>
                        </div>                       
                        
                        <div className={activeTab === 1 ? 'tab active' : 'tab'} onClick={() => this.changTab(1)}>
                            Logs
                            <div className={activeTab === 1 ? 'lineActive active' : 'lineActive'}></div>
                        </div>
                    </div>
                        {activeTab === 0 && <Product id={this.props.id} />}
                        {activeTab === 1 && <Logs id={this.props.id} />}
                </div>
            </div>
        )
    }
}

export default ProductDetails;