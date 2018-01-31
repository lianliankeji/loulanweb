import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	Switch
} from 'react-router-dom'

//Switch: 只渲染命中的第一个route

import App from 'containers/'
import Home from 'containers/Home/index.js'

const RouterMap = () => (
	<Router>
	    <div>
			<Switch>
				<Route exact path="/" component={App}/>
			    <Route path="/about" component={About}/>
			    <Route path="/topics/:id" component={Topics}/>
			</Switch>      
	    </div>
	</Router>
)



const About = (props) => (
	<div>
    <h2>About{props.match.params.location}</h2>
  </div>
)

const Topics = ({
	match
}) => (
	<div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({
	match
}) => (
	<div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default RouterMap