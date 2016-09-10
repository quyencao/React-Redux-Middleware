import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class UsersList extends Component {

	componentWillMount() {
		this.props.fetchUsers();
	}
	
	renderUser(user) {
		return (
			<div className="card card-block">
				<h4 className="card-title">{ user.name }</h4>
				<p className="card-text">Coca Fractory</p>
				<a href="#" className="btn btn-primary">Email</a>
			</div>
		);
	}

	render() {
		return (
			<div className="user-list">
				{ this.props.users.map(this.renderUser) }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps, actions)(UsersList);