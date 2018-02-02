import {
	combineReducers
} from 'redux'
import userinfo from './userinfo.js'
import homesData from './Home/getHomeData.js'


export default combineReducers({
	homesData,
	userinfo
})