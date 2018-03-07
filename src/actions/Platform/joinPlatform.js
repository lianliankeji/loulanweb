import * as actionTypes from 'constants/index.js'
import axios from 'api/axios.js'
// import axios from 'axios'


export const getChainsData = (data) => {

	return (dispatch) => {
		axios({
				method: 'get',
				url: 'loulan/chain/queryall',
			}, {
				/*firstName: 'Fred',
				lastName: 'Flintstone'*/
			}).then((response) => {
                if(response.data.ec == "000000") {
                    dispatch({
                        type: actionTypes.GET_CHAINS_LIST,
                        result: response.data.data
                    })
                }
			})
			.catch((error) => {
				console.log(error);
			});

	}
}