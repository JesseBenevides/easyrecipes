import { useEffect } from 'react';

function useAPI(fetchFunction, setState, searchName, resultLength) {
  useEffect(() => {
    async function getList() {
      const results = await fetchFunction(searchName);
      if (results) {
        if (resultLength && results.length > resultLength) {
          results.length = resultLength;
        }
        setState(results);
      } else {
        setState([]);
      }
    }

    getList();
  }, [fetchFunction, setState, searchName, resultLength]);
}

export default useAPI;
