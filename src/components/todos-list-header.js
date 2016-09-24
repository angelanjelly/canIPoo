import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const styles = {
	text: {
		fontSize: 30,
		fontStyle: "georgia",
		color: "orange"
	}
}
export default class TodosListHeader extends React.Component {
	render() {
		return (
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>Nickname</TableHeaderColumn>
						<TableHeaderColumn>Action</TableHeaderColumn>
					</TableRow>
				</TableHeader>
		);
	}
}