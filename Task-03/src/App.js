import { useState } from 'react';
import "./App.css"

export default function Form() {

	
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [birth, setBirth] = useState('');
	const [address, setAddress] = useState('');
	const [aadhar,setAadhar] = useState('');
	const [password, setPassword] = useState('');

	
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	const handlePhone = (e) => {
		setPhone(e.target.value);
		setSubmitted(false);
	};

	const handleBirth = (e) => {
		setBirth(e.target.value);
		setSubmitted(false);
	}

	const handleAddress = (e) => {
		setAddress(e.target.value);
		setSubmitted(false);
	}

	const handleAdharcard = (e) => {
		setAadhar(e.target.value);
		setSubmitted(false);
	}

	
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || phone === '' || birth === '' || address=== ''  || aadhar === '' || password === '') {
			setError(true);
			
		} else {
			setSubmitted(true);
			setError(false);
		}
	};

	


	
	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',
				}}>
				<h1 className='success-msg'>User successfully registered!!</h1>
				
				<h2>Name : {name} </h2>
				<h2>Email  : {email} </h2>
				<h2>Contact  : {phone} </h2>
				<h2> Date of Birth  : {birth} </h2>
				<h2>Address  : {address} </h2>
				<h2>Aadhar card Number  : {aadhar} </h2>
				<h2>Password : {password} </h2>

				
			</div>
		);
	};

	      
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<h1 className='error-msg'>Please enter all the fields</h1>
			</div>
		);
	};

	return (
		<div>
		<div>
			
			<h1 className='header'>Student Registration Form 2023</h1>
		</div>
		<div className="form">
				<form className='form-details'>
					{/* Labels and inputs for form data */}



					<input onChange={handleName} className="input" placeholder=' Full Name'
						value={name} type="text" />


					<input onChange={handleEmail} className="input" placeholder='Email'
						value={email} type="email" />

					<input onChange={handlePhone} className="input" placeholder='Phone Number'
						value={phone} type="phone" />

					<input onChange={handleBirth} className="input" placeholder='date of Birth'
						value={birth} type="date" />

					<input onChange={handleAddress} className="input" placeholder='Address'
						value={address} type="address" />

					<input onChange={handleAdharcard} className="input" placeholder='Aadhar card Number'
						value={aadhar} type="number" />

					<input onChange={handlePassword} className="input" placeholder='Password'
						value={password} type="password" />

					<button onClick={handleSubmit} className="btn"
						type="submit">
						Register
					</button>
				</form>

				{/* Calling to the methods */}
				<div className="msg ">
					{errorMessage()}
					{successMessage()}
				</div>

			</div>
			</div>
	);
}
