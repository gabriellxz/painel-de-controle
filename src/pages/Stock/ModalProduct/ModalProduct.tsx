import { Box, Button, Modal, Typography } from "@mui/material";
import { IoMdClose } from "react-icons/io";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 650,
    width: "100%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
};

interface Props {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    isEditing: boolean;
}

export default function ModalProduct(props: Props) {
    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
        >
            <Box sx={style}>
                <div className="flex justify-between">
                    <Typography variant="h6" component="h2">
                        <span>{props.title}</span>
                    </Typography>
                    <Button onClick={props.onClose} color="primary">
                        <IoMdClose />
                    </Button>
                </div>

                {props.children}
            </Box>
        </Modal>
    )
}