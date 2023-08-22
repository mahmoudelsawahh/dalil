import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const Url = "https://apps.deltawy.net/";
const Url = "http://192.168.0.201:8080/dalil-New/";
export const getAllAds = createAsyncThunk(
  "Ads/getAllAds",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${Url}rest/test.ads/getAll/5`)
        .then((res) => res.data);
        // console.log("api:::", data)
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getAdDetails = createAsyncThunk(
  "Ads/getAdDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${Url}adDetails?id=${id}`)
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// https://deltawy.net/adDetails?id=4

const AdvertSlice = createSlice({
  name: "Ads",
  initialState: {
    isLoadingAds: false,
    error: null,
    getAllAdsArray: null,
    getAdDetailsArray: null,
  },
  extraReducers: {
    // Get The AllAds
    [getAllAds.pending]: (state, action) => {
      state.isLoadingAds = true;
      state.error = null;
      // state.getAllAdsArray = null;
    },
    [getAllAds.fulfilled]: (state, action) => {
      state.isLoadingAds = false;
      state.getAllAdsArray = action.payload;
    },
    [getAllAds.rejected]: (state, action) => {
      state.isLoadingAds = false;
      state.error = action.payload;
    },

    // Get The AllAds
    [getAdDetails.pending]: (state, action) => {
      state.isLoadingAds = true;
      state.error = null;
      // state.getAllAdsArray = null;
    },
    [getAdDetails.fulfilled]: (state, action) => {
      state.isLoadingAds = false;
      state.getAdDetailsArray = action.payload;
    },
    [getAdDetails.rejected]: (state, action) => {
      state.isLoadingAds = false;
      state.error = action.payload;
    },
  },
});

export default AdvertSlice.reducer;
