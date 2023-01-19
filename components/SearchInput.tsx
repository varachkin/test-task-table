import * as React from 'react';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import {Box} from "@mui/system";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {tableSlice} from "../store/TableSlice";
import {alpha, styled} from "@mui/material";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#6d008c',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#444444',
            color: '#4c4c4c',
        },
        '&:hover fieldset': {
            borderColor: '#6d008c',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6d008c',
        },
    },
});

const SearchField = styled((props: TextFieldProps) => {
    const {searchRequest} = useAppSelector(state => state.tableReducer);
    const dispatch = useAppDispatch();

    const handleChangeSearchInput = (event: any) => {
        if (+event.target.value || event.target.value === '') {
            dispatch(tableSlice.actions.searchRequest(event.target.value))
        } else {
            return null
        }
    }

    return (
        <Box
            sx={{
                display: 'flex', justifyContent: "center",
            }}
        >
            <CssTextField
                sx={{width: 400, borderColor: '#ffffff'}}
                id="custom-css-outlined-input"
                label="Search"
                variant="outlined"
                color='error'
                onChange={handleChangeSearchInput}
                value={searchRequest}
            />
        </Box>
    )
})(({theme}) => ({
    '& .Search': {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#dddddd',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            color: 'white',
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.secondary.dark, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.dark,
        },
    },
}));

export default SearchField