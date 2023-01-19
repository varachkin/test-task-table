import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Loader from "./Loader";
import {ITableRowData} from "../Interface/interface";
import {v4 as uuidv4} from 'uuid';
import styles from './../styles/Table.module.css'
import CustomModal from "./CustomModal";
import {tableSlice} from "../store/TableSlice";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {useEffect} from "react";
import {useRouter} from "next/router";

interface ITableCustomProps {
    data: ITableRowData[],
}

export default function TableCustom({data}: ITableCustomProps) {
    const {isLoading, error} = useAppSelector((state) => state.tableReducer);
    const router = useRouter();
    const {total_pages} = useAppSelector(state => state.tableReducer);
    const dispatch = useAppDispatch();

    const handleOpen = (el:ITableRowData) => {
        dispatch(tableSlice.actions.openModal(el));
    };

    const redirect = () => {
        if(router.query.id && router.query.id !== '/' && +router.query.id > total_pages){
            router.push('/')
        }
    }

    useEffect(()=> {
        setTimeout(redirect, 3000)
    }, [router])

    if (isLoading) {
        return <Loader/>
    }

    return (
        <TableContainer sx={{
            maxWidth: 600,
            minHeight: 323,
            mt: 6,
            mb: 6,
            ml: "auto",
            mr: "auto",
            background: 'none'
        }}
        >
            <Table sx={{minWidth: 600, border: "1px solid #b0b0b0"}} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{backgroundColor: "rgba(130,49,139,0.59)"}}>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map((product: any, i: number) => {
                        return (
                            <TableRow
                                key={uuidv4()}
                                sx={{backgroundColor: product.color, border: "1px solid #b0b0b0",}}
                                className={styles.table_row}
                            >
                                <TableCell onClick={()=> handleOpen(product)}>{product.id}</TableCell>
                                <TableCell onClick={()=> handleOpen(product)}>{product.name}</TableCell>
                                <TableCell onClick={()=> handleOpen(product)}>{product.year}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <CustomModal/>
        </TableContainer>
    );
}