//import Vue 						from 'vue';
//import * as fromTypes from './types.js';
//import jwt_decode 		from 'jwt-decode';
//import router         from '../core/router';

export const actions = {

	/*[fromTypes.CREATE_USER]({commit, dispatch}, payload){
		

		commit(
			fromTypes.GET_ERRORS,
			{
				server: false,
				register: false,
			}
		);

		Vue.http
		.post(
			Vue.config.environments.baseURL+'users',
			payload
		)
		.then(() => {
			var user = {
				username : payload.email,
				password : payload.plainPassword,
			}

			//redirect user
			dispatch(
				fromTypes.LOGIN_USER,
				user,
			);
		}, response => {
			if (response.status == 400){
				commit(
					fromTypes.GET_ERRORS,
					{
						register: true
					}
				);
			} else {
				commit(
					fromTypes.GET_ERRORS,
					{
						server: true
					}
				);
			}
		});
	},*/
};