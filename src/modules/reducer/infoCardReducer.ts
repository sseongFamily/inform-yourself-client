import { CardState } from '../../types/infoCardType';
import { InfoCardAction } from '../infoCard';

const initialState: CardState = {
  hotAndNewList: {
    hotUser: [],
    newUser: [],
  },
  detailList: [],
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
    default:
      return state;
  }
};

export default infoCardReducer;
