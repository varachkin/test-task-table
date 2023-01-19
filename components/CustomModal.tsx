import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {tableSlice} from "../store/TableSlice";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
};

export default function CustomModal() {
    const {isModalOpen, modalDescription} = useAppSelector(state => state.tableReducer);
    const dispatch = useAppDispatch();
    const handleClose = () => dispatch(tableSlice.actions.closeModal());

    return (
        <div>
            <Modal
                open={isModalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{...style, bgcolor: modalDescription.color}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        <span>ID:</span><span>{modalDescription.id}</span>
                    </Typography>
                    <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2, backgroundColor: modalDescription.color }}
                        component="div"
                    >
                        <Typography sx={{display: 'flex', justifyContent: 'space-between'}}><span>NAME:</span><span>{modalDescription.name}</span></Typography>
                        <Typography sx={{display: 'flex', justifyContent: 'space-between'}}><span>YEAR:</span><span>{modalDescription.year}</span></Typography>
                        <Typography sx={{display: 'flex', justifyContent: 'space-between'}}><span>COLOR:</span><span>{modalDescription.color}</span></Typography>
                        <Typography sx={{display: 'flex', justifyContent: 'space-between'}}><span>PANTONE VALUE:</span><span>{modalDescription.pantone_value}</span></Typography>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}