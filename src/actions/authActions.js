export const handleEmail = email => {
	return {
		type: 'handleEmail',
		payload: {
			email
		}
	}
};

export const handlePass = password => {
	return {
		type: 'handlePass',
		payload: {
			password
		}
	}
};

export const handleName = name => {
	return {
		type: 'handleName',
		payload: {
			name
		}
	}
};

export const handleEmailRegister = emailRegister => {
	return {
		type: 'handleEmailRegister',
		payload: {
			emailRegister
		}
	}
};

export const handlePasswordRegister = passwordRegister => {
	return {
		type: 'handlePasswordRegister',
		payload: {
			passwordRegister
		}
	}
};

export const signUp = (name, email, pass) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase.auth().createUserWithEmailAndPassword(email, pass)
			.then(user => {

				let userId = firebase.auth().currentUser.uid;

				firebase.database().ref('users').child(userId).set({
					name: name
				});

				dispatch({
					type: 'registerStatus',
					payload: {
						registerStatus: true
					}
				});

			})
	}
}



