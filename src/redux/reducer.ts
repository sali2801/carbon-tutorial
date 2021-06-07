import { BaseAction } from './actions';
import { ApplicationActionType, State } from './types';

export const initialState: State = {
  data: []
};

export const AppplicationReducer = (state: State = initialState, action: BaseAction) => {

  switch (action.type) {
    case ApplicationActionType.SetMockData: {
      const {mockData} = JSON.parse(action.payload);
      console.log('655555555555');
      console.log(mockData);
      return {
        ...state,
        data: mockData,
      };
    };
    default:
      console.log('default action dispatchde');
      return state;
  }
};


