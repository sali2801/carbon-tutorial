import { useCallback, useState } from 'react';
import { useDispatch} from 'react-redux';
import { setMockData } from '../redux/actions';

export const useGetMockData = () => {

  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<any>();

  const fetchMockData = () => {
    setIsFetching(true);

    return fetch('https://jsonplaceholder.typicode.com/posts')
      .catch(setError)
      .finally(() => {
        setIsFetching(false);
      });
  };

  const fetchAndSetMockData = useCallback(() => {
    return fetchMockData().then((res: any) => res.json()).then((response) => {
      if (response) {
        dispatch(
          setMockData(
            response
          )
        );
      }
    });
  }, []);

  return {
    isFetching,
    error,
    refetch: fetchAndSetMockData,
  };
};
