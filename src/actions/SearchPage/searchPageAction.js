import request from 'axios';
import * as types from '../types';

export function changeSearchWord(searchWord) {
  return {
    type: types.CHANGE_SEARCH_WORD,
    searchWord,
  };
}

function requestProcess() {
  return { type: types.REQUEST_PROCESS };
}

export function search() {
  return (dispatch, getState) => {
    dispatch(requestProcess());

    const company_code = getState().rootReducer.search.searchWord;
    return makeRequest('http://localhost/find', 'post', { company_code })
      .then(response => {
        if (response.status === 200) {
          return dispatch({
            type: types.SUCCESS_SEARCH,
            searchedList: response.data.result,
          });
        } else {
          return dispatch({
            type: types.FAILED_SEARCH,
            message: '検索に失敗しました。',
          });
        }
      })
      .catch(() => {
        return dispatch({
          type: types.FAILED_SEARCH,
          message: '検索に失敗しました。',
        });
      });
  };
}

export function changeAlertMessage(message) {
  return {
    type: types.CHANGE_ALERT_MESSAGE,
    message,
  };
}

function makeRequest(url, method, data) {
  return request({
    url,
    method,
    data,
  });
}
