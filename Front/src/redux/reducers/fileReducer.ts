type Action = ReturnType<typeof setFilesAC> | ReturnType<typeof setCurrentDirAC>;

type File = {
    _id: string;
    name: string;
    type: string;
    size: number;
    path: string;
    user: string;
    childs: string[];
};
type InitialState = {
    files: File[];
    currentDir: null | string;
};

const initialState: InitialState = {
    files: [],
    currentDir: null,
};

export const fileReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_FILES': {
            return { ...state, files: action.files };
        }
        case 'SET_CURRENT_DIR': {
            return { ...state, currentDir: action.dir };
        }
        default: {
            return state;
        }
    }
};

export const setFilesAC = (files: File[]) => ({ type: 'SET_FILES', files } as const);
export const setCurrentDirAC = (dir: string) => ({ type: 'SET_CURRENT_DIR', dir } as const);