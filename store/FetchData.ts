import {AppDispatch} from "./store";
import {tableSlice} from "./TableSlice";

export const fetchData = () => async (dispatch: AppDispatch)=> {
        dispatch(tableSlice.actions.tableDataFetching())
        const response = await fetch('https://reqres.in/api/products');
    if(!response.ok) {
        console.log('error')
        dispatch(tableSlice.actions.tableDataFetchingError(response.status))
    }else{
        const res = await response.json();
        dispatch(tableSlice.actions.tableDataFetchingSuccess(res))
    }
}