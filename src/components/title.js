import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';

const styles = {
	title: {
  		fontSize: 50,
  		marginTop: 30,
  		marginBottom: 0
	}
};



export default class Title extends React.Component {

	render() {
		return (
			<div>
				<span style={{ fontSize: 60, fontStyle:'Helvetica' }}>yourTurn<img src="/src/img/poo2.png" width="50" height="50" /><img src="/src/img/poo2.png" width="50" height="50" />?</span>
				<br />
				<span style={{ fontSize: 20, fontStyle:'georgia' }}>Do you still awkwardly wait in line for gym equipment at your gym?</span><br />
				<Card style={{ marginTop: 10, marginBottom: 0, width: 400, display: 'inline-block'}}>
				<CardHeader
					title="need assistance?"
					subtitle="Click here to see the options."
					avatar="/src/img/crying.png"
					actAsExpander={true}
					showExpandableButton={true}/>
				<CardText expandable={true}>
					<img src="/src/img/toilet-paper.jpg" width="60" height="60" onClick={this.props.needForAssistance.bind(null, this)} />
					<span>"Gender Neutral Bathroom"</span>
				</CardText>
				</Card>
			</div>
		);
	}
}