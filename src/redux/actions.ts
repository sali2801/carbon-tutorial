import { SetMockDataAction, ApplicationActionType } from './types';

export type BaseAction<T = any> = {
  type: string;
  // TODO: Handle types for redux-saga-routines action payloads
  // tslint:disable-next-line:no-any
  payload: T;
};

export const setMockData = (mockData: []): SetMockDataAction => ({
  type: ApplicationActionType.SetMockData,
  payload: { mockData },
});
