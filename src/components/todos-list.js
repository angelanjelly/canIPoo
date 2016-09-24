import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
const styles = {
  container: {
    textAlign: 'center',
    fontStyle: "georgia",
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'inline-block', //answer for centering the table,
    width: 'auto'
  },
  text: {
  	fontSize: 10,
  	fontStyle: "georgia"
  }
};

export default class TodosList extends React.Component {

	constructor(props) {
	super(props);

		this.state = {
			showCheckboxes: false
		}
	}

	renderItems() {
		const props = _.omit(this.props, 'todos');

		return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
	}
	//this.props => {todos: array2} this.props.todos
	//{...todo} =
	//task={todo.task} isCompleted={todo.isCompleted}

	render() {

		return (
			<div style={styles.container}>
				<Table>
					<TableHeader adjustForCheckbox={this.state.showCheckboxes}> 
						<TableRow>
							<TableHeaderColumn>Nickname</TableHeaderColumn>
							<TableHeaderColumn>Action</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={this.state.showCheckboxes} style={styles.text}>
						{this.renderItems()}
					</TableBody>
				</Table>
			</div>
		);
	}
}