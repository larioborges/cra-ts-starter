export interface AppState {
	loading: boolean;
	authToken: string;
}

export const initialState: AppState = {
	loading: false,
	authToken: '',
};
