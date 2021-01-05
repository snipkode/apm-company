import React, { Component } from 'react';

export default class TeamForm extends Component {
	constructor(props){
		super(props);
		this.state = { name: ''}
	 
	}
	onChangeInput = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	render() {
		return (
		<React.Fragment>
			<div className='col-md-6'>
				<div className='card bg-success'>
				<div className='card-header text-white'>Form Data Team</div>
				<div className='card-body bg-white'>
					<div className='form-group'>
						<input type="text"
							name='name'
							className='form-control' 
							value={this.state.name} 
							onChange={this.onChangeInput}
							placeholder='Full Name' required/>
					</div>

					<div className='form-group'>
						<input type="text"
							name='designation'
							className='form-control' 
							value={this.state.designation} 
							onChange={this.onChangeInput}
							placeholder='Proffesion' required/>
					</div>

					<div className='form-group'>
						<input type="file"
							name='profilePic'
							className='form-control' 
							onChange={this.onChangeInput}
							placeholder='Profile Picture' required/>
					</div>

					<div className='form-group'>
						<textarea
							cols='30'
							rows='10'
							name='bio'
							className='form-control' 
							onChange={this.onChangeInput}
							placeholder='Your Biography' required/>
					</div>

					<div className='form-group'>
						<textarea
							cols='30'
							rows='10'
							name='address'
							className='form-control' 
							onChange={this.onChangeInput}
							placeholder='Your Address' required/>
					</div>

					<div className='form-group'>
						<input
							type='text'
							name='phone'
							className='form-control' 
							onChange={this.onChangeInput}
							placeholder='Your Mobile' required/>
					</div>

					<div className='form-group'>
						<input
							type='text'
							name='email'
							className='form-control' 
							onChange={this.onChangeInput}
							placeholder='Your E-mail' required/>
					</div>

					<div className='form-group'>
						<input
							type='text'
							name='website'
							className='form-control' 
							onChange={this.onChangeInput}
							placeholder='Your Website' required/>
					</div>
				</div>
				</div>
			</div>

			<div className='col-md-6'>

				<div className='card bg-success'>
				<div className='card-header text-white'>Social Media</div>
					<div className='card-body bg-white'>
						<div className='form-group'>
							<input
								type='text'
								name='facebook'
								className='form-control' 
								onChange={this.onChangeInput}
								placeholder='Your facebook' required/>
						</div>

						<div className='form-group'>
							<input
								type='text'
								name='twitter'
								className='form-control' 
								onChange={this.onChangeInput}
								placeholder='Your Twitter' required/>
						</div>

						<div className='form-group'>
							<input
								type='text'
								name='instagram'
								className='form-control' 
								onChange={this.onChangeInput}
								placeholder='Your instagram' required/>
						</div>
					</div>
				</div>


				<div className='card bg-success'>
				<div className='card-header text-white'>Skill Data</div>
					<div className='card-body bg-white'>
						<div className='form-group'>
							<input
								type='text'
								name='facebook'
								className='form-control' 
								onChange={this.onChangeInput}
								placeholder='Your facebook' required/>
						</div>

						<div className='form-group'>
							<input
								type='text'
								name='twitter'
								className='form-control' 
								onChange={this.onChangeInput}
								placeholder='Your Twitter' required/>
						</div>

						<div className='form-group'>
							<input
								type='text'
								name='instagram'
								className='form-control' 
								onChange={this.onChangeInput}
								placeholder='Your instagram' required/>
						</div>
					</div>
				</div>




				<div className='card bg-success'>
				<div className='card-header text-white'>Social Media</div>
					<div className='card-body bg-white'>
						<div className='form-group'>
							<input
								type='text'
								name='facebook'
								className='form-control' 
								onChange={this.onChangeInput}
								placeholder='Your facebook' required/>
						</div>

						<div className='form-group'>
							<input
								type='text'
								name='twitter'
								className='form-control' 
								onChange={this.onChangeInput}
								placeholder='Your Twitter' required/>
						</div>

						<div className='form-group'>
							<input
								type='text'
								name='instagram'
								className='form-control' 
								onChange={this.onChangeInput}
								placeholder='Your instagram' required/>
						</div>
					</div>
				</div>

			</div>



		</React.Fragment>
		);
	}
}
