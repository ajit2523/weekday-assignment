import React, { useState } from 'react';
import { Button, Modal, Typography } from '@material-ui/core';

const JobModal = ({ job }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                View Job Description
            </Button>
            <Modal open={open} onClose={handleClose}>
                <div>
                    <Typography variant="h6">{job.title}</Typography>
                    <Typography variant="body1">{job.description}</Typography>
                </div>
            </Modal>
        </div>
    );
};

export default JobModal;