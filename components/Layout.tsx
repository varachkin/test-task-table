import React, {ReactNode} from 'react';
import Pagination from "./Pagination";
import SearchInput from './SearchInput';
import styles from '../styles/Home.module.css'
import {useAppSelector} from "../hooks/hooks";
import Error from "next/error";

interface ILayoutProps {
    children: ReactNode,
}

const Layout = ({children}: ILayoutProps) => {
    const {error} = useAppSelector(state => state.tableReducer);

    if(error) {
        return <Error statusCode={+error}/>
    }

    return (
        <div className={styles.wrapper}>
            <SearchInput/>
            {children}
            <Pagination/>
        </div>
    );
};

export default Layout;