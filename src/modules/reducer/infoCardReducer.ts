import { CardState } from '../../types/infoCardType';
import { InfoCardAction } from '../infoCard';

const initialState: CardState = {
  hotAndNewList: {
    hotUser: [],
    newUser: [],
  },
  detailList: {
    infoCardId: -1,
    title: '',
    description: '',
    oneLineIntroduce: '',
    blogUrl: '',
    repositoryUrl: '',
    likeCount: 0,
    stack: [],
  },
};

const infoCardReducer = (state: CardState = initialState, action: InfoCardAction): CardState => {
  switch (action.type) {
    case 'user/HOTANDNEWINFO':
      return {
        ...state,
        hotAndNewList: {
          hotUser: action.payload.hotUser,
          newUser: action.payload.newUser,
        },
      };
    case 'user/DETAILCARDINFO':
      return {
        ...state,
        detailList: action.payload,
      };
    case 'user/NEWCARDLIST':
      const baseId = state.hotAndNewList.newUser.map((el) => el.cardId);
      console.log(baseId);
      const filterArr = action.payload.filter((el) => {
        if (baseId.indexOf(el.cardId) >= 0) {
          return null;
        }
        return el;
      });
      // TODO: 다시 받아온 리스트 중에 기존의 아이디를 제거하고 새로운 아이디의 인덱스를 찾아 낸다.
      // TODO: 그 후 그 인덱스 값만 컨캣을 해준다.

      return {
        ...state,
        hotAndNewList: {
          hotUser: [...state.hotAndNewList.hotUser],
          newUser: state.hotAndNewList.newUser.concat(filterArr),
        },
      };

    default:
      return state;
  }
};

export default infoCardReducer;
