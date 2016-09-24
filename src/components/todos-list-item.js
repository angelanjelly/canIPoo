import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const styles = {
	form: {
		textAlign: 'center',
		margin: 'auto',
  		fontSize: 15,
  		fontStyle: "georgia",
  		width: 200,
  		height: 35,
	},
	action: {
		width: 200
	}
}
export default class TodosListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false
		}
	}
	renderTaskSection() {
		const { task, isCompleted } = this.props;
		const taskStyle = {
			color: isCompleted ? 'green' : 'pink',
			cursor: 'pointer',
			fontStyle: 'georgia',
			fontSize: 30
		}
		if (this.state.isEditing) {
			return (
				<TableRowColumn>
					<form style={styles.form} onSubmit={this.onSaveClick.bind(this)}>
						<input type="text" style={styles.form} defaultValue={task} ref="editInput" />
					</form>
				</TableRowColumn>
			)
		}
		return (

			<TableRowColumn style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
				{task}
			</TableRowColumn>

		);
	}
	renderActionsSection() {
		if (this.state.isEditing) {
			return (
				<TableRowColumn style={styles.action}>
					<RaisedButton onClick={this.onSaveClick.bind(this)}>Save</RaisedButton>
					<RaisedButton onClick={this.onCancelClick.bind(this)}>Cancel</RaisedButton>
				</TableRowColumn>
			);
		}

		return (
			<TableRowColumn style={styles.action}>
				<RaisedButton onClick={this.onEditClick.bind(this)}>Edit</RaisedButton>
				<RaisedButton onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</RaisedButton>
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
		this.setState({ isEditing: true});
	}
	onCancelClick() {
		this.setState({ isEditing: false});
	}
	onSaveClick(event) {
		event.preventDefault();

		const oldTask = this.props.task;
		const newTask = this.refs.editInput.value;
		
		this.props.saveTask(oldTask, newTask);
		this.setState({ isEditing: false });
	}
}