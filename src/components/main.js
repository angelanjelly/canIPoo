import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
//import WaitingList from './waiting';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//const waiting = ['angela', 'ben the dog'];

const todos = [
{
	task: 'I\'ve been waiting since 10am',
	isCompleted: false
},
{
	task: 'I NEED TO USE IT ASAP',
	isCompleted: false
}
];

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 100,
    fontStyle: "georgia",
    margin: 'auto'
  },
  title: {
  	fontSize: 100,
  	marginTop: 0
  },
  inside: {
  	textAlign: 'center',
  	margin: 'auto',
  	display: 'inline-block',
  	fontSize: 15
  },
  	waitingText: {
		fontSize: 30,
		fontStyle: "georgia",
		color: 'grey'
	},
	list: {
		width: 300,
		display: 'inline-block',

	}
};

let waiting = [];

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos,
			waiting
		};
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div style={styles.container}>
					<h1 style={styles.title}>Can I P<img src="/src/img/poo.png" width="50" height="50" /><img src="/src/img/poo.png" width="50" height="50" />?</h1>
					<CreateTodo style={styles.inside} todos={this.state.todos} createTask={this.createTask.bind(this)} />
					<TodosList 
						style={styles.inside}
						todos={this.state.todos}
						toggleTask={this.toggleTask.bind(this)}
						saveTask={this.saveTask.bind(this)}
						deleteTask={this.deleteTask.bind(this)}
					/>
				</div>
			</MuiThemeProvider>
		);
	}

	toggleTask(task) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === task)
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todos: this.state.todos })
	}

	createTask(task) {
		// let taskIdx = this.state.todos.length;
		// let taskColor = null;
		// if (taskIdx >= 5) {
		// 	taskColor = true;
		// } else {
		// 	taskColor = false;
		// }
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({ todos: this.state.todos });
	}

	saveTask(oldTask, newTask) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTodo.task = newTask;
		this.setState({ todos: this.state.todos });
	}
	deleteTask(taskToDelete) {
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
		this.setState({ todos: this.state.todos }); 
	}

}