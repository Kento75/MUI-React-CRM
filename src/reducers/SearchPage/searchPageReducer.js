import * as types from '../types';

// 定数
const immutableState = {
  tableTitle: '会社検索',
  tableColumns: ['会社コード', '会社名', '住所', 'メールアドレス'],
  tableOptions: {
    filterType: 'dropdown',
    responsive: 'stacked',
  },
  labelText: '検索文字列',
  placeholderText: 'Enterキーで検索実行',
};

// デフォルト設定
const defaultState = {
  searchWord: '',
  searchList: [],
};

const searchPageReducer = (state, action) => {
  switch (action.type) {
    case types.CHANGE_SEARCH_WORD:
      return {
        searchWord: action.searchWord,
      };
    case types.SUCCESS_SEARCH:
      return {};
    case types.FAILED_SEARCH:
      return {};
    case types.REQUEST_PROCESS:
      return {};
    case types.CHANGE_ALERT_MESSAGE:
      return {};
    default:
      return { immutableState, defaultState };
  }
};

export default searchPageReducer;
