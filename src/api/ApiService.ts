import api from './api';
import config from '../config';
import { setMockData } from '../redux/actions';
import { ApplicationActionType } from '../redux/types';

const ApiService = {
  loadData(dispatch: any) {
    api
      .getMethod(config.endPoints.posts)
      .then((posts) => {
        console.log(posts);
        dispatch(setMockData(posts));
      })
      .catch(() => {})
      .finally(() => {});
  },
};
export default ApiService;
