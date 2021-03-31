import { CardInfo } from '../../types/infoCardType';
import { UserInfo } from '../../types/userType';
import { UserAction } from '../user';

type UserState = {
  userInfo: UserInfo;
  cardInfo: CardInfo;
  accessToken: string;
  isLogin: boolean;
};

const initialState: UserState = {
  userInfo: {
    profileImage: '',
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
        accessToken: action.payload.accessToken,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default userReducer;
