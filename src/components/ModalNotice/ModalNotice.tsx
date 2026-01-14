import { Box, Modal } from "@mui/material";

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
}

interface Props {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function ModalNotice(props: Props) {
    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
        >
            <Box sx={style}>
                {props.children}
            </Box>
        </Modal>
    )
}