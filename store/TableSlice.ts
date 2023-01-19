import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    page: 1,
    total_pages: 1,
    per_page: 5,
    isLoading: false,
    isModalOpen: false,
    modalDescription:{
        id: 0,
        name: "",
        year: 0,
        color: "#ffffff",
        pantone_value: "",
    },
    error: null,
    searchRequest: '',
    data: [],
};

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        nextPage(state) {
            state.page !== state.total_pages ? state.page += 1 : null;
        },
        previousPage(state) {
            state.page > 1 ? state.page -= 1 : null;
        },
        searchRequest(state, action){
          state.searchRequest = action.payload
        },
        openModal(state, action){
            state.isModalOpen = true;
            state.modalDescription = action.payload;
        },
        closeModal(state){
            state.isModalOpen = false;
        },
        tableDataFetching(state) {
            state.isLoading = true;
        },
        tableDataFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.data = action.payload.data;
            state.page = action.payload.page;
            state.total_pages = action.payload.total_pages;

        },
        tableDataFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default tableSlice.reducer