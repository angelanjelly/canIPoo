import React from 'react';
import CreateItem from './create-item';
import TodosList from './todos-list';
import Waiting from './waiting';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import $ from 'jquery';
import {slackUrl} from '../../secret.js';

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

//const backgroundImageFile = '/src/img/tile.jpg';
const styles = {
	container: {
	    textAlign: 'center',
	    fontStyle: "georgia",
	    margin: 'auto',
	    // backgroundImage: 'url('+ backgroundImageFile + ')',
	    // backgroundSize: 'cover',
	    // overflow: 'hidden',
	    // backgroundOpacity: '0.2'
	},
	title: {
	  	fontSize: 70,
	  	marginTop: 30
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


export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos
		};
	}

	render() {
		return (
			<div style={styles.container}>
				<h1 style={styles.title}>Can I P<img src="/src/img/poo.png" width="50" height="50" /><img src="/src/img/poo.png" width="50" height="50" />?</h1>
				<h4>SOS! request for toilet paper </h4>
				<img src="/src/img/toilet-paper.jpg" width="60" height="60" onClick={this.toiletPaperForGenderNeu.bind(null, this)} />
				<span style={{color:'white'}}>_______</span>
				<img src="/src/img/toilet-paper.jpg" width="60" height="60" onClick={this.toiletPaperForWomens.bind(null, this)} /><br />
				<span>Gender Neutral Bathroom</span><span style={{color:'white'}}>_</span><span>Women's Bathroom   </span>
				<Waiting todos={this.state.todos} />
				<CreateItem style={styles.inside} todos={this.state.todos} createTask={this.createTask.bind(this)} />
				<TodosList
					style={styles.inside}
					todos={this.state.todos}
					toggleTask={this.toggleTask.bind(this)}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
				/>
			</div>
		);
	}

	toggleTask(task) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === task)
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todos: this.state.todos })
	}

	createTask(task) {
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