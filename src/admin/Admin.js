import React, { Component } from 'react';
import ServicesForm from './Form/ServicesForm';
import ContactForm from './Form/ContactForm';
import TeamForm from './Form/TeamForm';

export default class Admin extends Component {
	constructor(props){
		super(props);
		this.state = {
			authState: JSON.parse(window.localStorage.getItem("authState")),
			services: false,
			team: true,
			contact: false
		};
	}

	componentDidMount() {
		if(JSON.parse(window.atob(this.state.authState.auth)) !== true){
			this.props.history.push('/')
		}
	}

	FormSwitch = () => {
		const { services, team, contact} = this.state;
		if(services){
			return <ServicesForm/>
		} else if(team){
			return <TeamForm/>
		} else if(contact){
			return <ContactForm/>
		}
	}

	render() {
		
		return (
			<div>
				<div className='admin'>
					<div className="row">
						<div className="col-md-12">
							<div className="card bg-primary">
							  <div className="card-header text-center text-uppercase">
							  	<h4 className='text-white'>Welcome To Admin Area</h4>
							  </div>
							  <div className="card-body bg-dark">
							  	<div className='card-title text-center'>
							  		<button className='btn btn-success m-1' onClick={()=>this.setState({team: true, services: false, contact:false})}>Team Members</button>
							  		<button className='btn btn-danger m-1'  onClick={()=>this.setState({team: false, services: true, contact:false})}>Our Services</button>
							  		<button className='btn btn-primary m-1' onClick={()=>this.setState({team: false, services: false, contact:true})}>Our Contact</button>
							  	</div>
							  	<div className='row'>
							  		
							  				
					  				{
					  					this.FormSwitch()
					  				}
					  		

							  	</div>
							  </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
