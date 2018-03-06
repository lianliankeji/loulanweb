import React from 'react'
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'

//Switch: 只渲染命中的第一个route

import App from 'containers/'
import Platform from 'containers/Platform/'

console.log(App)

const RouterMap = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/home' component={App} />
            <Route exact path='/platform' component={Platform} />
        </Switch>
    </BrowserRouter>
)


export default RouterMap