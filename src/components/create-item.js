import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class CreateItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null
		};
	}

	renderError() {
		if (!this.state.error) { return null; }
			return <div style={{ color: 'red', fontSize: 15, fontStyle: "georgia" }}>{this.state.error}</div>
		return;
	}

	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" style={{ width: 300, height: 34, fontSize: 15 }} placeholder="Do You Have to Use the Bathroom?" ref="createInput"/>
				<RaisedButton onClick={this.handleCreate.bind(this)}>Create</RaisedButton>
				{this.renderError()}
			</form>
		);
	}

	handleCreate(event) {
		event.preventDefault();

		const createInput = this.refs.createInput;
		const task = createInput.value;
		const validateInput = this.validateInput(task);
		if (validateInput) {
			this.setState({ error: validateInput});
			return;
		}

		this.setState({ error: null })
		//console.log(this.props.createTask);
		this.props.createTask(task);
		this.refs.createInput.value = "";
	}

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exists.';
        } else {
            return null;
        }
    }
}