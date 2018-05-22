import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/** Components */
import DripTable from 'mui-drip-table';
import AppHeader from '../components/AppHeader';
import TextBox from '../components/TextBox';
/** Actions */
import { searchPageAction } from '../../actions';

class SearchPageContainer extends Component {
  constructor(props) {
    super(props);
    /** ActionBinds */
    this.handleChangeSearchWord = this.handleChangeSearchWord.bind(this);
    this.handleEnterSearchEdit = this.handleEnterSearchEdit.bind(this);
  }

  /**
   * 検索文字列変更時
   * @param {object} e Elmオブジェクト
   */
  handleChangeSearchWord(e) {
    const { searchActionBind } = this.props;
    // 検索ボックス内の値を引数に渡す
    searchActionBind.changeSearchWord(e.target.value);
  }

  /**
   * 検索実行時
   * @param {object} e Elmオブジェクト
   */
  handleEnterSearchEdit(e) {
    const { searchActionBind } = this.props;
    const ENTER_KEY_CODE = 13;
    // Enterキーを押下した場合は検索実行
    if (e.keyCode == ENTER_KEY_CODE) {
      searchActionBind.searchData();
    }
  }

  render() {
    const { tableTitle, tableColumns, tableOptions, labelText, placeholderText, searchWord, searchedList } = this.props;
    return (
      <div>
        <AppHeader />
        <TextBox
          labelText={labelText}
          placeholderText={placeholderText}
          textValue={searchWord}
          onKeyDownFunc={this.handleEnterSearchEdit}
          onChangeFunc={this.handleChangeSearchWord}
        />
        <DripTable title={tableTitle} columns={tableColumns} options={tableOptions} data={searchedList} />
      </div>
    );
  }
}

SearchPageContainer.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  tableColumns: PropTypes.arrayOf.isRequired,
  tableOptions: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  searchWord: PropTypes.string.isRequired,
  searchedList: PropTypes.arrayOf.isRequired,
};

function mapStateToProps(state) {
  const { tableTitle, tableColumns, tableOptions, labelText, placeholderText, searchWord, searchedList } = state.searchPageReducer;
  return {
    tableTitle,
    tableColumns,
    tableOptions,
    labelText,
    placeholderText,
    searchWord,
    searchedList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchActionBind: bindActionCreators(searchPageAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageContainer);
