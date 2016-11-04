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
export default class WaitingListItem extends React.Component {

	renderNicknameSection() {
		const { nickname, whichOneIsIt } = this.props;
		const nicknameStyle = {
			color: whichOneIsIt ? 'red' : 'brown',
			cursor: 'pointer',
			fontStyle: 'georgia',
			fontSize: 20
	}
		if (whichOneIsIt === '1') {
			return (
				<TableRowColumn style={styles.form}>
					<img src="src/img/bathroom.jpg" width="40" height="40" />
					<span style={{color: 'white'}}>___ __</span>{ nickname }
				</TableRowColumn>
			)
		} else if (whichOneIsIt === '2'){
			return (
				<TableRowColumn style={styles.form}>
					<img src="src/img/woman.jpg" height="40" />
					<span style={{color: 'white'}}>_______</span>{ nickname }
				</TableRowColumn>
			)
		} else if (whichOneIsIt === '3') {
			return (
				<TableRowColumn style={styles.form}>
					<img src="src/img/man.jpg" height="40" />
					<span style={{color: 'white'}}>_______</span>{ nickname }
				</TableRowColumn>
			)				
		} else {
			return (
				<TableRowColumn style={styles.form}>
					{ nickname }
				</TableRowColumn>
			)
		}
	}
	
	renderActionsSection() {
		return (
			<TableRowColumn style={styles.action}>
				<RaisedButton style={{margin: 10}} onClick={this.onClickNeutral.bind(this, this.props.nickname)}>GenderNeutral</RaisedButton>
				<RaisedButton style={{margin: 10}} onClick={this.onClickWomen.bind(this, this.props.nickname)}>Women</RaisedButton><br />
				<RaisedButton style={{margin: 10}} onClick={this.onClickMen.bind(this, this.props.nickname)}>Men</RaisedButton>
				<RaisedButton style={{margin: 10}} onClick={this.props.deleteNickname.bind(this, this.props.nickname)}>X</RaisedButton>
			</TableRowColumn>
		);
	};

	render() {
		return (
			<TableRow>
				{this.renderNicknameSection()}
				{this.renderActionsSection()}
			</TableRow>
		);
	}

	onClickNeutral(nickname) {
		this.props.updateNickname(nickname, '1');
	}
	onClickWomen(nickname) {
		this.props.updateNickname(nickname, '2');
	}
	onClickMen(nickname) {
		this.props.updateNickname(nickname, '3');
	}
}