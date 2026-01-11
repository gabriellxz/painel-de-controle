import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { categoryData } from "../../../mock/categoryData";

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
                        <span>Novo Produto</span>
                    </Typography>
                    <Button onClick={props.onClose} color="primary">
                        <IoMdClose />
                    </Button>
                </div>

                <form className="w-full mt-5 flex flex-col gap-4">
                    <div className="flex gap-2">
                        <TextField label="Código do produto" variant="outlined" type="number" sx={{ width: "100%" }} />
                        <TextField label="Nome do produto" variant="outlined" type="text" sx={{ width: "100%" }} />
                    </div>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Categorias"
                        >
                            {
                                categoryData.map(c => (
                                    <MenuItem key={c.id} value={c.nome}>{c.nome}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <div>
                        <TextField label="Quantidade em estoque" variant="outlined" type="number" sx={{ width: "100%" }} />
                    </div>
                    <Button variant="contained" sx={{ backgroundColor: '#000', color: '#5bb1b6' }}>
                        Adicionar Produto
                    </Button>
                </form>
            </Box>
        </Modal>
    )
}