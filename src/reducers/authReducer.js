const initialState = {
	email: '',
	password: '',
	name: '',
	emailRegister: '',
	passwordRegister: '',
	registerStatus: false
};

const authReducer = (state = initialState, action) => {

	if(action.type === 'registerStatus') {
		return {...state, registerStatus: action.payload.registerStatus};	
	}		

	if(action.type === 'handleEmail') {
		return {...state, email: action.payload.email};	
	}	

	if(action.type === 'handlePass') {
		return {...state, password: action.payload.password};	
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
