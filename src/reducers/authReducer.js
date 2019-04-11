const initialState = {
	email: '',
	password: '',
	name: '',
	emailRegister: '',
	passwordRegister: '',
	registerStatus: false,
	authMessage: '',
	userID: '',
	authType: ''
};

const authReducer = (state = initialState, action) => {

	if(action.type === 'handleError') {
		return {...state, authType: action.payload.authType, authMessage: action.payload.authMessage};	
	}	

	if(action.type === 'changeId') {
		return {...state, userID: action.payload.userID};	
	}

	if(action.type === 'registerStatus') {
		return {...state, registerStatus: action.payload.registerStatus, authMessage: action.payload.authMessage, authType: action.payload.authType};	
	}		

	if(action.type === 'changeAuthStatus') {
		return {...state, authMessage: action.payload.authMessage};	
	}	

	if(action.type === 'handleEmail') {
		return {...state, email: action.payload.email};	
	}	

	if(action.type === 'handlePass') {
		return {...state, password: action.payload.password};	
	}

	if(action.type === 'clearLogin') {
		return {...state, email: action.payload.email, password: action.payload.password};	
	}	

	if(action.type === 'handleName') {
		return {...state, name: action.payload.name};	
	}	

	if(action.type === 'handleEmailRegister') {
		return {...state, emailRegister: action.payload.emailRegister};	
	}	

	if(action.type === 'handlePasswordRegister') {
		return {...state, passwordRegister: action.payload.passwordRegister};	
	}				

  return state;
};

export default authReducer;
