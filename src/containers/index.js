import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Home from 'containers/Home/index.js'

import 'common/css/reset.css'

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		// alert(process.env.NODE_ENV)
	}

	render() {
		return (
			<Home {...this.props}/>
		)
	}
}