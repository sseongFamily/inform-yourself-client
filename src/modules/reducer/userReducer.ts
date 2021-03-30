import { UserAction } from '../user';

type UserState = {
  accessToken: string;
};

const initialState: UserState = {
  accessToken: '',
};

const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case 'user/LOGIN':
      return {
        accessToken: action.payload,
      };
  }
};

export default userReducer;
