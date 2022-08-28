import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Api from '../../services/api';

export const searchData = createAsyncThunk(
  'search/data',
  async (params, thunkAPI) => {
    const api = Api.create();
    const getSearchResult = await api
      .searchAction(params)
      .then(data => {
        return data.data;
      })
      .catch(error => {
        thunkAPI.rejectWithValue(error?.data || error);
      });

    return getSearchResult;
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {searchedObj: {}},
  reducers: {},
  extraReducers: {
    [searchData.pending]: (state, {payload}) => {
      state.searchedObj = {};
    },
    [searchData.fulfilled]: (state, {payload}) => {
      state.searchedObj = payload;
    },
    [searchData.rejected]: (state, {payload}) => {
      state.searchedObj = {};
    },
  },
});

export const {showLoader, hideLoader} = searchSlice.actions;

export default searchSlice.reducer;
