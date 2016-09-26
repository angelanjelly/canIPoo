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
				<span style={{ fontSize: 60, fontStyle:'Helvetica' }}>Can I P<img src="/src/img/poo2.png" width="50" height="50" /><img src="/src/img/poo2.png" width="50" height="50" />?</span>
				<br />
				<span style={{ fontSize: 20, fontStyle:'georgia' }}>Do you still awkwardly wait in line for the Bathroom?</span><br />
				<Card style={{ marginTop: 10, marginBottom: 0, width: 400, display: 'inline-block'}}>
				<CardHeader
					title="SOS! request for toilet paper!"
					subtitle="Click here to see the options."
					avatar="/src/img/crying.png"
					actAsExpander={true}
					showExpandableButton={true}/>
				<CardText expandable={true}>
					<img src="/src/img/toilet-paper.jpg" width="60" height="60" onClick={this.props.toiletPaperForGenderNeu.bind(null, this)} />
					<span style={{color:'white'}}>_______</span>
					<img src="/src/img/toilet-paper.jpg" width="60" height="60" onClick={this.props.toiletPaperForWomens.bind(null, this)} /><br />
					<span>"Gender Neutral Bathroom"</span><span style={{color:'white'}}>_</span><span>"Women's Bathroom   "</span>
				</CardText>
				</Card>
			</div>
		);
	}
}