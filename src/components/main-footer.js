import React from 'react';

const styles = {
	footer: {
		marginTop: 50,
		marginBottom: 50
	},
	license: {
		fontSize: 10,
		fontSize: 'georgia',
		color: 'grey'
	}
}
export default class Footer extends React.Component {

	render() {
		return (
			<div style={styles.footer}>
				<span style={styles.license}>"Icons designed by Freepik from Flaticon"</span><br />
			</div>
		);
	}
}