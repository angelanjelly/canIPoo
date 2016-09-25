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
			isEditing: false,
			isItTheFirstOne: false,
			isThisForMales: false
		}
	}

	renderTaskSection() {
		const { task, isCompleted } = this.props;
		const taskStyle = {
			color: isCompleted ? 'brown' : 'brown',
			cursor: 'pointer',
			fontStyle: 'georgia',
			fontSize: 20
		}

		if (this.state.isEditing) {
			if (this.state.isItTheFirstOne) {
				return (
					<TableRowColumn>
						<img src="src/img/bathroom.jpg" width="40" height="40" />
						{ task }
					</TableRowColumn>
				)
			} else if (!this.state.isItTheFirstOne && !this.state.isThisForMales){
				return (
					<TableRowColumn>
						<img src="src/img/woman.jpg" height="40" />
						{ task }
					</TableRowColumn>
				)
			} else if (this.state.isThisForMales) {
				return (
					<TableRowColumn>
						<img src="src/img/man.jpg" height="40" />
						{ task }
					</TableRowColumn>
				)				
			} 
		}
		return (

			<TableRowColumn style={taskStyle}>
				{ task }
			</TableRowColumn>

		);
	}
	
	renderActionsSection() {
		if (this.state.isEditing) {
			return (
				<TableRowColumn style={styles.action}>
					<RaisedButton style={{margin: 10}} onClick={this.onSaveClick.bind(this)}>Nevermind</RaisedButton><br />
					<RaisedButton style={{margin: 10}} onClick={this.props.deleteTask.bind(this, this.props.task)}>DONE</RaisedButton>
				</TableRowColumn>
			);
		}

		return (
			<TableRowColumn style={styles.action}>
				<RaisedButton style={{margin: 10}} onClick={this.onEditClick.bind(this)}>GenderNeutral</RaisedButton>
				<RaisedButton style={{margin: 10}} onClick={this.onEditClick2.bind(this)}>Women</RaisedButton><br />
				<RaisedButton style={{margin: 10}} onClick={this.onEditClick3.bind(this)}>Men</RaisedButton>
				<RaisedButton style={{margin: 10}} onClick={this.props.deleteTask.bind(this, this.props.task)}>Nevermind</RaisedButton>
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
	onEditClick() {
		this.setState({ isEditing: true, isItTheFirstOne: true, isThisForMales: false});
	}
	onEditClick2() {
		this.setState({ isEditing: true, isItTheFirstOne: false, isThisForMales: false});
	}
	onEditClick3() {
		this.setState({ isEditing: true, isItTheFirstOne: false, isThisForMales: true});
	}
	onCancelClick() {
		this.setState({ isEditing: false});
	}
	onSaveClick(event) {
		event.preventDefault();
		//const oldTask = this.props.task;
		//const newTask = this.refs.editInput.value;
		
		//this.props.saveTask(oldTask, newTask);
		this.setState({ isEditing: false });
	}
}