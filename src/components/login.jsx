import React from "react";

export default function Login() {
	return (
		<div style={{padding: 24}}>
			<h1>Login</h1>
			<p>This is the login page. Enter your credentials to continue.</p>
			<div style={{marginTop:16}}>
				<label>
					Username: <input placeholder="username" />
				</label>
			</div>
			<div style={{marginTop:8}}>
				<label>
					Password: <input type="password" placeholder="password" />
				</label>
			</div>
			<div style={{marginTop:12}}>
				<button>Sign in</button>
			</div>
		</div>
	);
}

