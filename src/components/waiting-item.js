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
					<img src="src/img/1-cardio.png" width="40" height="40" />
					<span style={{color: 'white'}}>___ __</span>{ nickname }
				</TableRowColumn>
			)
		} else if (whichOneIsIt === '2'){
			return (
				<TableRowColumn style={styles.form}>
					<img src="src/img/2-cardio2.png" height="40" />
					<span style={{color: 'white'}}>_______</span>{ nickname }
				</TableRowColumn>
			)
		} else if (whichOneIsIt === '3') {
			return (
				<TableRowColumn style={styles.form}>
					<img src="src/img/3-chest.png" height="40" />
					<span style={{color: 'white'}}>_______</span>{ nickname }
				</TableRowColumn>
			)
		} else if (whichOneIsIt === '4') {
			return (
				<TableRowColumn style={styles.form}>
					<img src="src/img/handgrip.png" height="40" />
					<span style={{color: 'white'}}>_______</span>{ nickname }
				</TableRowColumn>
			)
		} else if (whichOneIsIt === '5') {
			return (
				<TableRowColumn style={styles.form}>
					<img src="src/img/5-rings.png" height="40" />
					<span style={{color: 'white'}}>_______</span>{ nickname }
				</TableRowColumn>
			)
		} else if (whichOneIsIt === '6') {
			return (
				<TableRowColumn style={styles.form}>
					<img src="src/img/6-weight-10kg.png" height="40" />
					<span style={{color: 'white'}}>_______</span>{ nickname }
				</TableRowColumn>
			)
		} else if (whichOneIsIt === '7') {
			return (
				<TableRowColumn style={styles.form}>
					<img src="src/img/7-dumbbell.png" height="40" />
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
				<RaisedButton style={{margin: 10}} onClick={this.onClick1.bind(this, this.props.nickname)}>Cardio 1</RaisedButton>
				<RaisedButton style={{margin: 10}} onClick={this.onClick2.bind(this, this.props.nickname)}>Cardio 2</RaisedButton><br />
				<RaisedButton style={{margin: 10}} onClick={this.onClick3.bind(this, this.props.nickname)}>Chest</RaisedButton>
				<RaisedButton style={{margin: 10}} onClick={this.onClick4.bind(this, this.props.nickname)}>Hand Grip</RaisedButton>
				<RaisedButton style={{margin: 10}} onClick={this.onClick5.bind(this, this.props.nickname)}>Rings</RaisedButton><br />
				<RaisedButton style={{margin: 10}} onClick={this.onClick6.bind(this, this.props.nickname)}>Weight-10kg</RaisedButton>
				<RaisedButton style={{margin: 10}} onClick={this.onClick7.bind(this, this.props.nickname)}>Dumbbell</RaisedButton>
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

	onClick1(nickname) {
		this.props.updateNickname(nickname, '1');
	}
	onClick2(nickname) {
		this.props.updateNickname(nickname, '2');
	}
	onClick3(nickname) {
		this.props.updateNickname(nickname, '3');
	}
	onClick4(nickname) {
		this.props.updateNickname(nickname, '4');
	}
	onClic5(nickname) {
		this.props.updateNickname(nickname, '5');
	}
	onClick6(nickname) {
		this.props.updateNickname(nickname, '6');
	}
	onClick7(nickname) {
		this.props.updateNickname(nickname, '7');
	}
}
