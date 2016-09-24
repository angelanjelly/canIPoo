import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const styles = {
	waitingText: {
		fontSize: 30,
		fontStyle: "georgia",
		color: 'grey'
	},
	list: {
		width: 300,
		display: 'inline-block',

	}
}



export default class WaitingList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div style={styles.waitingText}>
			<br />
			<List style={styles.list}>
				<Subheader style={{fontSize: 30}}>Waiting Queue</Subheader>
				{this.props.waiting.map(function(listValue) {
					return <ListItem style={{color:'grey'}}key={this.props.waiting.indexOf(listValue)}>{this.props.waiting.indexOf(listValue)+1}. {listValue}<br /></ListItem>
				})}
			</List>
			</div>
		);
	}
}