import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {
	connect
} from 'react-redux'
import {
	bindActionCreators
} from 'redux'
import * as userinfoActions from 'actions/userinfo.js'

import Header from 'components/Header/index.js'
import Loading from "components/Loading/index.js"



class Home extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {};
	}

	login = () => {
		let loginState = this.props.userinfo.login;

		console.log(loginState)

		if (loginState) {
			this.props.userinfoActions.logout({
				login: false
			})
		} else {
			this.props.userinfoActions.login({
				login: true
			})
		}
	}

	render() {

		return (
			<div>
				<Header login={this.props.userinfo.login} logFn={this.login} />
				<Loading />
			</div>

		)
	}
}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		userinfoActions: bindActionCreators(userinfoActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)