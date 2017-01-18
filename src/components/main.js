import React from 'react';
import CreateItem from './create-item';
import WaitingList from './waiting-list';
import Waiting from './waiting';
import Title from './title';
import Footer from './main-footer';
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
				var todo = {
					id: data.key,
					nickname: data.val().nickname,
					whichOneIsIt: data.val().whichOneIsIt
				}
				todos.push(todo);
			});
			that.setState({todos: todos});
		});
	}

	render() {
		return (
			<div style={styles.container}>
				<Header></Header>
				<Title needForAssistance={this.needForAssistance.bind(this)} />
				<Waiting todos={this.state.todos} />
				<CreateItem style={styles.inside} todos={this.state.todos} createNickname={this.createNickname.bind(this)} />
				<WaitingList
					style={styles.inside}
					updateNickname={this.updateNickname.bind(this)}
					todos={this.state.todos}
					saveNickname={this.saveNickname.bind(this)}
					deleteNickname={this.deleteNickname.bind(this)}
				/>
				<Footer />
			</div>
		);
	}
	
	createNickname(nickname) {
		var newTodo = {
			nickname: nickname,
			whichOneIsIt: false
		};
		database.ref('todos').push(newTodo);
		this.setState({ todos: this.state.todos.concat(newTodo) });
	}
	saveNickname(oldnickname, newnickname) {
		const foundTodo = _.find(this.state.todos, todo => todo.nickname === oldnickname);
		foundTodo.nickname = newnickname;
	}
	deleteNickname(nicknameToDelete) {
		var idx = this.state.todos.filter(function (todo) {
			return nicknameToDelete === todo.nickname;
		});
		var keyVal = idx[0].id; //an array of an object
		database.ref('todos').child(keyVal).remove();
		_.remove(this.state.todos, todo => todo.nickname === nicknameToDelete);
	}

	updateNickname(nicknameToUpdate, status) {
		var idx = this.state.todos.filter(function (todo) {
			return nicknameToUpdate === todo.nickname;
		});
		var keyVal = idx[0].id; //an array of an object
		database.ref('todos').child(keyVal).update({nickname: nicknameToUpdate, whichOneIsIt: status });
		this.componentDidMount();
	}

	needForAssistance() {
		$.ajax({
  		type: "POST",
 		url: slackUrl,
    	data: JSON.stringify({'text': 'Need assistant!'}),
    	dataType: 'JSON'
		});
		console.log('requesting for assistance');
	}

}