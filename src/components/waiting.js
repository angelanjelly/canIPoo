import React from 'react';
import {List, ListItem} from 'material-ui/List';

const styles = {
	text: {
		fontSize: 30,
		fontStyle: "georgia",
		color: 'grey'
	}
}


const waiting = ['angela', 'ben'];

export default class WaitingList extends React.Component {
	render() {
		return (
			<div style={styles.text}>
			<br />
			<List>
				{waiting.map(function(listValue) {
					return <ListItem key={waiting.indexOf(listValue)}>{waiting.indexOf(listValue)+1}. {listValue}<br /></ListItem>
				})}
			</List>
			</div>
		);
	}

}