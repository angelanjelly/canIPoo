import _ from 'lodash';
import React from 'react';
import WaitingListHeader from './waiting-list-header';
import WaitingListItem from './waiting-item';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
const styles = {
  container: {
    fontStyle: "georgia",
    display: 'inline-block', //answer for centering the table,
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 30,
    maxWidth: 700
  },
  text: {
  	fontSize: 10,
  	fontStyle: "georgia"
  }
};

export default class WaitingList extends React.Component {

	constructor(props) {
	super(props);

		this.state = {
			showCheckboxes: false
		}
	}

	renderItems() {
		const props = _.omit(this.props, 'todos');
		return _.map(this.props.todos, (waiting, index) => 
			<WaitingListItem updateNickname={this.props.updateNickname.bind(this)} key={index} {...waiting} {...props} />);
	}

	render() {

		return (
			<div style={styles.container}>
				<Table>
					<TableHeader adjustForCheckbox={this.state.showCheckboxes}> 
						<TableRow style={{fontSize: 30}}>
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