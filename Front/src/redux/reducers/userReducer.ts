export type ActionsUser = ReturnType<typeof getUser> | ReturnType<typeof removeUser>

type User = {
    id: string;
    email: string;
    diskSpace: number;
    usedSpace: number;
    avatar: string;
};


type InitialState = {
    currentUser: User | null;
    isAuth: boolean;
};


const initialState: InitialState = {
    currentUser: null,
    isAuth: false,
};

export const userReducer = (state = initialState, action: ActionsUser) => {

    switch (action.type) {
        case'login/LOGIN-USER': {
            return {...state, isLoggedIn: action.user, isAuth: true}
        }
        case'login/LOGOUT-USER': {
            localStorage.removeItem('userToken')
            return {...state, isLoggedIn: {}, isAuth: false}
        }
        default: {
            return state
        }
    }
};

export const getUser = (user: User) => ({type: 'login/LOGIN-USER', user} as const);
export const removeUser = () => ({type: 'login/LOGOUT-USER'} as const);

