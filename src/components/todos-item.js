import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const styles = {
	form: {
		textAlign: 'left',
		margin: 'auto',
  		fontSize: 20,
  		fontStyle: "georgia",
  		width: 'auto',
  		height: 35
	},
	action: {
		margin: 0,
		textAlign: 'right'
	}
}
export default class TodosListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	renderTaskSection() {
		const { task, whichOneIsIt } = this.props;
		const taskStyle = {
			color: whichOneIsIt ? 'red' : 'brown',
			cursor: 'pointer',
			fontStyle: 'georgia',
			fontSize: 20
	}
		if (whichOneIsIt === '1') {
			return (
				<TableRowColumn style={styles.form}>
					<img src="src/img/bathroom.jpg" width="40" height="40" />
					<span style={{color: 'white'}}>___ __</span>{ task }
				</TableRowColumn>
			)
		} else if (whichOneIsIt === '2'){
			return (
				<TableRowColumn style={styles.form}>
					<img src="src/img/woman.jpg" height="40" />
					<span style={{color: 'white'}}>_______</span>{ task }
				</TableRowColumn>
			)
		} else if (whichOneIsIt === '3') {
			return (
				<TableRowColumn style={styles.form}>
					<img src="src/img/man.jpg" height="40" />
					<span style={{color: 'white'}}>_______</span>{ task }
				</TableRowColumn>
			)				
		} else {
			return (
				<TableRowColumn style={styles.form}>
					{ task }
				</TableRowColumn>
			)
		}
	}
	
	renderActionsSection() {
		return (
			<TableRowColumn style={styles.action}>
				<RaisedButton style={{margin: 10}} onClick={this.onClickNeutral.bind(this, this.props.task)}>GenderNeutral</RaisedButton>
				<RaisedButton style={{margin: 10}} onClick={this.onClickWomen.bind(this, this.props.task)}>Women</RaisedButton><br />
				<RaisedButton style={{margin: 10}} onClick={this.onClickMen.bind(this, this.props.task)}>Men</RaisedButton>
				<RaisedButton style={{margin: 10}} onClick={this.props.deleteTask.bind(this, this.props.task)}>X</RaisedButton>
			</TableRowColumn>
		);
	};

	render() {
		return (
			<TableRow>
				{this.renderTaskSection()}
				{this.renderActionsSection()}
			</TableRow>
		);
	}

	onClickNeutral(todo) {
		this.props.updateTask(todo, '1');
	}
	onClickWomen(todo) {
		this.props.updateTask(todo, '2');
	}
	onClickMen(todo) {
		this.props.updateTask(todo, '3');
	}
}