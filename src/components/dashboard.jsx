import React from "react";

export default function Dashboard() {
	return (
		<div style={{padding:24}}>
			<h1>Dashboard</h1>
			<p>Welcome to the dashboard — sample content is displayed here.</p>
			<ul>
				<li>Total users: 42</li>
				<li>Active sessions: 3</li>
				<li>Pending tasks: 0</li>
			</ul>
		</div>
	);
}
