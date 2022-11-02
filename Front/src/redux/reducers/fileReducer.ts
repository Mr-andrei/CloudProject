export type FileAction =
    | ReturnType<typeof setFilesAC>
    | ReturnType<typeof setCurrentDirAC>
    | ReturnType<typeof createFilesAC>;

export type FileType = {
    _id: string;
    name: string;
    type: string;
    size: number;
    date: Date;
    path: string;
    user: string;
    childs: string[];
};
type InitialState = {
    files: FileType[];
    currentDir: null | string;
};

const initialState: InitialState = {
    files: [],
    currentDir: null,
};

export const fileReducer = (state = initialState, action: FileAction) => {
    switch (action.type) {
        case 'SET_FILES': {
            return { ...state, files: action.files };
        }
        case 'SET_CURRENT_DIR': {
            return { ...state, currentDir: action.dir };
        }
        case 'CREATE_FILE': {
            return { ...state, files: [...state.files, action.file] };
        }
        default: {
            return state;
        }
    }
};

export const setFilesAC = (files: FileType[]) => ({ type: 'SET_FILES', files } as const);
export const createFilesAC = (file: FileType) => ({ type: 'CREATE_FILE', file } as const);
export const setCurrentDirAC = (dir: string) => ({ type: 'SET_CURRENT_DIR', dir } as const);