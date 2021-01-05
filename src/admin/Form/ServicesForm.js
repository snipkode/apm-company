import React, { Component } from 'react';

export default class ServicesForm extends Component {
	constructor(props){
		super(props);
		this.state = {full_name: ''};
	}
	onChangeInput = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	render() {
		return (
			<div>
				<div className='card-header text-white'>Form Data Services</div>
				<div className='card-body bg-white'>
					<div className='form-group'>
						<input type="text"
							name='full_name'
							className='form-control' 
							value={this.state.full_name} 
							onChange={this.onChangeInput}
							placeholder='Your Full Name'/>
					</div>
				</div>
			</div>
		);
	}
}
