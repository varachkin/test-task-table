import {Box, IconButton, Typography} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {tableSlice} from "../store/TableSlice";
import {useRouter} from "next/router";

const Pagination = () => {
    const router = useRouter();
    const {page, total_pages} = useAppSelector(state => state.tableReducer);
    const currentPage = router.query.id ? +router.query.id : page;
    const dispatch = useAppDispatch();
    const {nextPage, previousPage} = tableSlice.actions;

    return (
        <Box sx={{textAlign: 'center'}}>
            <Link href={currentPage > 1 ? `${currentPage - 1}` : `${currentPage}`}>
                <IconButton color='secondary' aria-label="delete" size='small' onClick={() => dispatch(previousPage())}>
                    <ArrowBackIosNewIcon/>
                </IconButton>
            </Link>
            <Typography
                component="span"
                sx={{ml: 7, mr: 7}}
                color='primary'
            >
                Page {currentPage || '-'} of {total_pages || '-'}
            </Typography>
            <Link href={currentPage < total_pages ? `${currentPage + 1}` : `${currentPage}`}>
                <IconButton color='secondary' aria-label="delete" size='small' onClick={() => dispatch(nextPage())}>
                    <ArrowForwardIosIcon/>
                </IconButton>
            </Link>
        </Box>
    );
};

export default Pagination;