import React from 'react'
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'

//Switch: 只渲染命中的第一个route

import App from 'containers/'
import Platform from 'containers/Platform/'
import JoinPlatform from 'containers/JoinPlatform'

console.log(App)

const RouterMap = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/home' component={App} />
            <Route exact path='/platform' component={Platform} />
            <Route exact path='/platform/join' component={JoinPlatform} />
        </Switch>
    </Router>
)


export default RouterMap