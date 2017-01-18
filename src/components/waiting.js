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
		display: 'inline-block'
	}
};

export default class Waiting extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	renderWaiting() {
		let result = [];
		if (this.props.todos.length > 3){
			result.push(<span key={-1}><Subheader style={{ fontSize: 30 }}>Waiting Queue</Subheader></span>);
			
			for(let i = 3; i <= this.props.todos.length - 1; i++) {
				if (i === 3) {
					result.push(<span key={i}><ListItem style={{color:'grey'}}> Next in line : {this.props.todos[i].nickname}<br /></ListItem></span>)
				} else {
					result.push(<span key={i}><ListItem style={{color:'grey'}}> {this.props.todos[i].nickname}<br /></ListItem></span>)
				}
			}
		}
		return result;
	}

	render() {
		return (
			<div style={styles.waitingText}>
			<br />
			<List style={styles.list}>
				{this.renderWaiting(this.props.todos)}
			</List>
			</div>
		);
	}
}