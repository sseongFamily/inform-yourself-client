import { UserState } from '../../types/userType';
import { UserAction } from '../user';

const initialState: UserState = {
  userInfo: {
    profileImage: '',
    oneLineIntroduce: '',
    userName: '',
    stack: [],
    size: 'medium',
    modify: false,
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
    modify: false,
  },
  isLogin: false,
};

const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case 'user/LOGIN':
      return {
        ...state,
        userInfo: action.payload.userInfo,
        cardInfo: action.payload.cardInfo,
        isLogin: true,
      };
    case 'user/LOGOUT':
      return {
        ...state,
        isLogin: false,
      };
    case 'user/CREATECARD':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          oneLineIntroduce: action.payload.userInfo.oneLineIntroduce,
          stack: action.payload.userInfo.stack,
        },
        cardInfo: action.payload.cardInfo,
      };
    case 'user/MODIFY':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          modify: true,
        },
      };

    case 'user/SAVE':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          modify: false,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
