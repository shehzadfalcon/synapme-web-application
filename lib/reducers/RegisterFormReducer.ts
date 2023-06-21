import { RegisterValues } from '@lib/types/user';

export const initialValues: RegisterValues = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  dateOfBirth: '',
  gender: 'male',
  receiveEmailNotifications: false,
};

export const initialValidateValues = {
  firstName: true,
  lastName: true,
  email: true,
  username: true,
  password: true,
  confirmPassword: true,
  dateOfBirth: true,
  gender: true,
  receiveEmailNotifications: true,
};

// will add more state in future
export const initialState = {
  isLoading: false,
};

export const enum REDUCER_ACTION_TYPE {
  SET_IS_LOADING,
}

type ReducerActions = {
  type: REDUCER_ACTION_TYPE;
  payload?: boolean;
};

export const useDispatch = (
  state: typeof initialState,
  action: ReducerActions,
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_IS_LOADING:
      return { ...state, isLoading: action.payload ?? initialState.isLoading };
    default:
      return state;
  }
};
