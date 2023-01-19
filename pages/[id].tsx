import React, {useEffect} from 'react';
import TableCustom from "../components/TableCustom";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {separateTableData} from "../utils/utils";
import {useRouter} from "next/router";
import {fetchData} from "../store/FetchData";

const Data = () => {
    const router = useRouter();
    const {data, page, per_page, searchRequest, total_pages} = useAppSelector(state => state.tableReducer);
    const currentPage = router.query.id ? +router.query.id : page;
    const arr = separateTableData(data, currentPage, per_page, searchRequest);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [])

    return (
        <TableCustom data={arr}/>
    );
};

export default Data;