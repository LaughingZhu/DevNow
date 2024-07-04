import '@common/docsearch.css';
import config from '@config/index';
import { DocSearch } from '@docsearch/react';
const apiKey = import.meta.env.PUBLIC_SEARCH_API_KEY;
const apiId = import.meta.env.PUBLIC_SEARCH_APP_ID;
function Search() {
  return (
    <div className='mr-4 hidden lg:block'>
      {config.search && (
        <DocSearch
          appId={apiId}
          apiKey={apiKey}
          indexName='devnow-laughingzhu'
          maxResultsPerGroup={5}
        />
      )}
    </div>
  );
}

export default Search;
