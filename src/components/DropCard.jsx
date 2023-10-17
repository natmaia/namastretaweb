'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PencilSquareIcon, TrashIcon, EllipsisHorizontalIcon} from '@heroicons/react/24/outline';

export default function DropMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <EllipsisHorizontalIcon className="text-collor-link m-1"/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                icon={""}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose} className="text-collor-link m-1">
                    <PencilSquareIcon className="h-6 w-6 text-collor-link m-1" /> Edit
                </MenuItem>
                <MenuItem onClick={handleClose} className="text-cancel m-1">
                    <TrashIcon className="h-6 w-6 text-cancel m-1"/> Delete</MenuItem>
            </Menu>
        </div>
    );
}