import _ from 'lodash';

function buildSearchEngine(data) {
  return {
    data: _.cloneDeep(data),
    search(searchInput) {
      if (!this.data) {
        return [];
      }

      const searchResults = this.data.reduce((result, { id, text }) => {
        if (text.split(' ').some((word) => word === searchInput)) {
          return [...result, id];
        }
        return result;
      }, []);

      return searchResults;
    },
  };
}

export default buildSearchEngine;
