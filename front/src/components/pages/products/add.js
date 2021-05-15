import React, { Component } from 'react';
import Topbar from '../../shared/topbar/topbar';
import Sidebar from '../../shared/sidebar/sidebar';
import { AvForm, AvField, AvInput, AvGroup } from 'availity-reactstrap-validation';
import { Label,  Button, FormGroup, Spinner } from "reactstrap";
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import Loading from '../../shared/loading/loading';
import { baseBackURL, addProductFunction, getAllEmblemsFunction, getAllStatusFunction } from '../../services/api';
import * as c from '../../shared/constants/constants';

import 'react-dropzone-uploader/dist/styles.css';

class AddProducts extends Component {
    constructor(props) {
      super(props);  
      this.state = {
        loading: true,
        emblemDrop: [],
        statusDrop: [],
        data: [],
        spinnerActive: false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, errors, values) {      
      if (errors.length === 0){
        this.setState({ spinnerActive: true });
        this.saveProduct(values);
      }      
    }

    saveProduct = async(values) => {
      try {
        const response = await addProductFunction(values);
        this.setState({ spinnerActive: false });
          if (!response.error) {
            window.location.replace('/products/main/products');
          }
      }
      catch (error){
          console.log(error);
      }     
    }

    loadEmblemsDrop = async() => {
      try {
          const response = await getAllEmblemsFunction();
          this.setState({ emblemDrop: response});
      }
      catch (error){
          console.log(error);
      }
    }

    loadStatusDrop = async() => {
        try {
            const response = await getAllStatusFunction();
            this.setState({ statusDrop: response});
        }
        catch (error){
            console.log(error);
        }
    }
    
    componentDidMount() {
        this.loadEmblemsDrop();
        this.loadStatusDrop();
    }
  
    render() {
      const { loading, spinnerActive } = this.state;
      return (
        <div>
            <Topbar />
            <Sidebar />
            <div className="containerContent">
                <div className="title">
                    Add Product
                </div>
                <div className="containerPackages">
                    <div className="tableContainer">
                        {!loading ?
                        <div>
                        <AvForm id="firstStepForm" onSubmit={this.handleSubmit}>
                            <AvGroup>
                                <AvGroup>
                                    <Label for="prod_name">PRODUCT NAME</Label>
                                    <AvInput type="text" name="prod_name" id="prod_name" placeholder="Required field" maxLength={50} helpMessage="" required />
                                </AvGroup>
                                <AvGroup>
                                    <Label for="price">PRICE</Label>
                                    <AvInput type="text" name="price" id="price" placeholder="Required field" maxLength={50} helpMessage="" />
                                </AvGroup>
                                <AvGroup>
                                    <Label for="promo_price">PROMOTION PRICE</Label>
                                    <AvInput type="text" name="promo_price" id="promo_price" placeholder="Required field" maxLength={50} helpMessage="" required />
                                </AvGroup>
                                <AvGroup>
                                    <Label for="size">SIZE</Label>
                                    <AvInput type="text" name="size" id="size" placeholder="Required field" maxLength={50} helpMessage="" />
                                </AvGroup>
                                <AvGroup>
                                    <Label for="tag">TAGS</Label>
                                    <AvInput type="text" name="tag" id="tag" placeholder="Required field" maxLength={50} helpMessage="" />
                                </AvGroup>
                            </AvGroup>
                            <AvField type="select" name="emblem" label="EMBLEM" helpMessage="" required >
                                <option value=""></option>
                                {this.state.emblemDrop.map((v, index) => {
                                    return <option value={v.EMBLEM}>{v.EMBLEM}</option>;
                                })}
                            </AvField>
                            <AvField type="select" name="promo_status" label="EMBLEM" helpMessage="" required >
                                <option value=""></option>
                                {this.state.statusDrop.map((v, index) => {
                                    return <option value={v.STATUS}>{v.STATUS}</option>;
                                })}
                            </AvField> 
                            <div class="col-2 mx-auto">
                            <FormGroup>                  
                            <Button                    
                                style={{background: "#2b40ba", borderColor: "#2b40ba"}}                      
                            >
                                Save
                                {spinnerActive && <Spinner animation="border" size="sm" />}
                            </Button>                 
                            </FormGroup>    
                            </div>
                        </AvForm>                
                        </div>
                        : <div className='containerLoad'><Loading /></div>}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default compose(withRouter)(AddProducts);