const initialState = {
	
	isAuthenticated : false ,
	error : null ,
	loggedIn : false,
	user : null ,
	register_success : null
}


export default function reducer (state=initialState , action )  {
	switch(action.type){
		case 'CASE_LOGIN' : {
			return  {...state , isAuthenticated : action.payload} ; 
		}
		case 'USERNAME_ALREADY_TAKEN' : {
			return  {...state , register_success : action.payload.success,
								error : action.payload.error,
								loggedIn : action.payload.loggedIn} ; 
		}
		case 'REGISTER_SUCCESS' : {
			return  {...state , loggedIn : action.payload.loggedIn ,
								register_success : action.payload.success,
								isAuthenticated : true ,
								user : action.payload.user } ; 
		}
		default :
			return state ; 

	}


}

