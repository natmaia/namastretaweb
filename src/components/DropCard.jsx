"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  PencilSquareIcon,
  TrashIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { deleteCurador } from "@/actions/curador";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function DropMenu({ curador }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const router = useRouter();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    const response = await deleteCurador(curador.id);
    if (response?.error) {
      toast.error(response.error);
    } else {
      toast.success(response.ok);
    }
    setAnchorEl(null);
  };

  const handleEdit = () => {
    router.push("curadores/" + curador.id + "/edit");
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <EllipsisHorizontalIcon className="text-collor-link m-1" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        icon={""}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleEdit} className="text-collor-link m-1">
          <PencilSquareIcon className="h-6 w-6 text-collor-link m-1" /> Edit
        </MenuItem>

        <AlertDialog>
          <AlertDialogTrigger>
            <MenuItem onClick={handleClick} className="text-cancel m-1">
              <TrashIcon className="h-6 w-6 text-cancel m-1" /> Delete
            </MenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Tem certeza que deseja apagar esse curador?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Ao apagar o curador, todos os dados serão perdidos. Essa ação
                não será revertida
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>
                Sim, eu desejo apagar o curador
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Menu>
    </div>
  );
}
