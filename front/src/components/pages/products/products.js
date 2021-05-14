import React, { Component } from 'react';
import MaterialTable from 'material-table';
import Topbar from '../../shared/topbar/topbar';
import Sidebar from '../../shared/sidebar/sidebar';
import { getAllProductsFunction } from "../../services/api";
import Loading from '../../shared/loading/loading';
import { withRouter } from "react-router-dom";
import './product.css';
import * as c from '../../shared/constants/constants.js';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            columns: [],
            data: [],
            dataExport: []
        }
    }

    getProducts = async e => {
        try {
            const response = await getAllProductsFunction();  
            this.setState({ loading: false, data: response.data.result});
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getProducts();
        this.setColumns();
    }

    setColumns() {
        const columns = [
            { title: 'ID PRODUCT', field: 'ID_PROD' },            
            { title: 'NAME', field: 'PROD_NAME' },
            { title: 'IMAGE', field: 'IMAGE_FILE' },
            { title: 'PRICE', field: 'PRICE' },
            { title: 'STATUS PROMOTION', field: 'PROMO_STATUS' },
            { title: 'PRICE PROMOTION', field: 'PROMO_PRICE' },
            { title: 'EMBLEM', field: 'EMBLEM' },
            { title: 'SIZES', field: 'SIZES' },
            { title: 'TAGS', field: 'TAGS' },

        ];

        this.setState({ columns: columns });
    }

    render() {
        const { loading, columns, data } = this.state;

        return (
            <div>
                <Topbar />
                <Sidebar />
                <div className="containerContent">
                    <div className="title">
                        Products List
                    </div>
                    <div className="containerPackages">
                        <div className="tableContainer">
                            {!loading ? <MaterialTable
                                title=""
                                icons={c.tableIcons}
                                grouping
                                columns={columns}
                                data={data}
                                options={{
                                    exportButton: true,
                                    filtering: false,
                                    pageSize: 20,
                                    grouping: true,
                                    exportCsv: true
                                }}                                
                                actions={[                                  
                                    {
                                        icon: c.tableIcons.Add,
                                        tooltip: 'Add Product',
                                        isFreeAction: true,
                                        onClick: () => { window.location.replace(`products/main/products/add`) }
                                    }
                                ]}    
                            /> : <div className='containerLoad'><Loading /></div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Product);