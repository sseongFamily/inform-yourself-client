import { UserState } from '../../types/userType';
import { UserAction } from '../user';

const initialState: UserState = {
  userInfo: {
    profileImage: '',
    oneLineIntroduce: '',
    userName: '',
    stack: [],
  },
  cardInfo: {
    infoCardId: 0,
    title: '',
    oneLineIntroduce: '',
    description: '',
    blogUrl: '',
    repositoryUrl: '',
    likeCount: 0,
    stack: [],
  },
  accessToken: '',
  isLogin: false,
};

const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case 'user/LOGIN':
      return {
        ...state,
        userInfo: action.payload.userInfo,
        cardInfo: action.payload.cardInfo,
        accessToken: action.payload.accessToken,
        isLogin: true,
      };
    case 'user/LOGOUT':
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};

export default userReducer;
