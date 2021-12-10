import { useEffect } from 'react';

function useAPI(fetchFunction, setState, searchName, resultLength) {
  useEffect(() => {
    async function getList() {
      const results = await fetchFunction(searchName);
      if (resultLength) results.length = resultLength;
      setState(results);
    }

    getList();
  }, [fetchFunction, setState, searchName, resultLength]);
}

export default useAPI;
