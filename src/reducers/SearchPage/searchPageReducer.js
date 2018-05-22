import * as types from '../types';

// 定数
const immutableState = {
  // テーブル設定
  tableTitle: '会社検索',
  tableColumns: ['会社コード', '会社名', '住所', 'メールアドレス'],
  tableOptions: {
    filterType: 'dropdown',
    responsive: 'stacked',
  },
  // 検索ボックス設定
  labelText: '検索文字列',
  placeholderText: 'Enterキーで検索実行',
};

// デフォルト設定
const defaultState = {
  // 検索文字列
  searchWord: '',
  // 検索結果
  searchList: [],
};

const searchPageReducer = (state, action) => {
  switch (action.type) {
    // 検索文字列変更時
    case types.CHANGE_SEARCH_WORD:
      return {
        ...immutableState,
        searchWord: action.searchWord,
      };
    // 検索正常終了時
    case types.SUCCESS_SEARCH:
      return {
        ...immutableState,
        searchList: action.result,
      };
    // 検索以上終了時
    case types.FAILED_SEARCH:
      return {};
    case types.REQUEST_PROCESS:
      return {};
    // アラートメッセージ変更処理
    case types.CHANGE_ALERT_MESSAGE:
      return {};
    default:
      return { ...immutableState, ...defaultState };
  }
};

export default searchPageReducer;
