export interface AuthState {
    isAuthenticated : boolean
    user? : AuthUser
    isLoading : boolean
    hasError : boolean
}

export interface AuthUser {
    id : string 
    username : string
    email : string
}