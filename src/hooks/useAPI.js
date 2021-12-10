import { useEffect } from 'react';

function useAPI(fetchFunction, setState, searchName) {
  useEffect(() => {
    async function getList() {
      const NUMBER_OF_RECIPES = 12;
      const results = await fetchFunction(searchName);
      results.length = NUMBER_OF_RECIPES;
      setState(results);
    }

    getList();
  }, [fetchFunction, setState, searchName]);
}

export default useAPI;
