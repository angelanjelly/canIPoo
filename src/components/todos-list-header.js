import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class TodosListHeader extends React.Component {
	render() {
		return (
				<TableHeader style={{textAlign: 'right'}}>
					<TableRow>
						<TableHeaderColumn>Nickname</TableHeaderColumn>
						<TableHeaderColumn>Action</TableHeaderColumn>
					</TableRow>
				</TableHeader>
		);
	}
}