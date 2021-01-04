import React, { Component } from 'react';
import FormInput from "../../components/UI/Input";
import { db } from '../../config/firestore-dev';


export default class From extends Component {
    constructor(props){
        super(props);
        this.state = { first_name: '', last_name: '', email_address: '', phone_no: '', con_message:'' }
    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmitInput = () => {
        db.collection('messages').doc().set(this.state)
        this.setState({ first_name: '', last_name: '', email_address: '', phone_no: '', con_message:'' })
    }

    onSubmit = (e) => {
        e.preventDefault()
    }

    render(){

    return (
      <div className="contact-form-wrap">
          <form id="contact-form" onSubmit={this.onSubmit}>
              <div className="row">
                  <div className="col-md-6">
                      <FormInput
                          value={this.state.first_name}
                          onChange={this.onChangeInput}
                          tag={'input'}
                          type={'text'}
                          name={'first_name'}
                          placeholder={'First Name *'}
                      />
                  </div>

                  <div className="col-md-6">
                      <FormInput
                          value={this.state.last_name}
                          onChange={this.onChangeInput}
                          tag={'input'}
                          type={'text'}
                          name={'last_name'}
                          placeholder={'Last Name *'}
                      />
                  </div>

                  <div className="col-md-6">
                      <FormInput
                          value={this.state.email_address}
                          onChange={this.onChangeInput}
                          tag={'input'}
                          type={'email'}
                          name={'email_address'}
                          placeholder={'Email address *'}
                      />
                  </div>

                  <div className="col-md-6">
                      <FormInput
                          value={this.state.phone_no}
                          onChange={this.onChangeInput}
                          tag={'input'}
                          type={'text'}
                          name={'phone_no'}
                          placeholder={'Phone No'}
                      />
                  </div>

                  <div className="col-12">
                      <FormInput
                          value={this.state.con_message}
                          onChange={this.onChangeInput}
                          tag={'textarea'}
                          name={'con_message'}
                          placeholder={'Write Your Message *'}
                      />

                      <FormInput
                          onClick={()=>this.onSubmitInput()}
                          tag={'button'}
                          classes={'btn-outline'}
                      />

                      <div className="form-message"/>
                  </div>
              </div>
          </form>
      </div>
    );
};

}
