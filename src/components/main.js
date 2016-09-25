import React from 'react';
import CreateItem from './create-item';
import TodosList from './todos-list';
import Waiting from './waiting';
import Title from './title';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import $ from 'jquery';
import {slackUrl} from '../../secret.js';
import * as firebase from 'firebase';
const todos = [];

const styles = {
	container: {
	    textAlign: 'center',
	    fontStyle: "georgia",
	    margin: 'auto',
	},
	inside: {
	  	textAlign: 'center',
	  	margin: 'auto',
	  	display: 'inline-block',
	  	fontSize: 15
	},
	list: {
		width: 300,
		display: 'inline-block'
	}
};

var config = {
	apiKey: 'AIzaSyBHzbZP6UOyjRSiowzPL7owdC49nl-wIB0',
	authDomain: 'canip-3ccfa.firebaseio.com',
	databaseURL: 'https://canip-3ccfa.firebaseio.com',
	storageBucket: 'canip-3ccfa.appspot.com'
}

firebase.initializeApp(config);

const database = firebase.database();

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
  			todos
		};
	}

	componentDidMount() {
		const that = this;
		database.ref('todos').on('value', function(snap) {
			var todos = [];
			snap.forEach(function(data) {
				console.log('heheheheh');
				var todo = {
					id: data.key,
					task: data.val().task,
					isCompleted: false
				}
				todos.push(todo);
			});
			that.setState({todos: todos});
		});
	}

	render() {
		return (
			<div style={styles.container}>
				<Title toiletPaperForGenderNeu={this.toiletPaperForGenderNeu.bind(this)}
					toiletPaperForWomens={this.toiletPaperForWomens.bind(this)} />
				<Waiting todos={this.state.todos} />
				<CreateItem style={styles.inside} todos={this.state.todos} createTask={this.createTask.bind(this)} />
				<TodosList
					style={styles.inside}
					todos={this.state.todos}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
				/>
			</div>
		);
	}
	createTask(task) {
		var newTodo = {
			task: task,
			isCompleted: false
		};
		database.ref('todos').push(newTodo);
		this.setState({ todos: this.state.todos.concat(newTodo) });
	}
	saveTask(oldTask, newTask) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTodo.task = newTask;
		// this.setState({ todos: this.state.todos });
	}
	deleteTask(taskToDelete) {
		var idx = this.state.todos.filter(function (todo) {
			return taskToDelete === todo.task;
		});
		var keyVal = idx[0].id; //an array of an object
		console.log('idx',idx);
		database.ref('todos').child(keyVal).remove();
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
		// this.setState({ todos: this.state.todos });
	}
	toiletPaperForGenderNeu() {
		$.ajax({
  		type: "POST",
 		url: slackUrl,
    	data: JSON.stringify({'text': 'SOS! PLEASE BRING SOME TOILET PAPER TO THE GENDER NEUTRAL BATHROOM!'}),
    	dataType: 'JSON'
		});
		console.log('requesting some toilet paper')
	}
	toiletPaperForWomens() {
		$.ajax({
  		type: "POST",
 		url: slackUrl,
    	data: JSON.stringify({'text': 'SOS! PLEASE BRING SOME TOILET PAPER TO THE WOMEN\'S BATHROOM!'}),
    	dataType: 'JSON'
		});
		console.log('requesting some toilet paper')
	}

}