import { Box, Button } from "@mui/material";
import Logo from "../../components/Logo/Logo";

const style = {
    maxWidth: 650,
    width: "100%",
    bgcolor: '#23262b',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
}

export default function Login() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center m-3">
            <Box sx={style}>
                <form className="w-full flex flex-col gap-4">
                    <div className="font-light text-center mb-5">
                        <Logo />
                        <h1 className="text-3xl">Entrar</h1>
                    </div>
                    <div>
                        <input type="email" placeholder="Email" className="w-full p-3 border border-white outline-none rounded-md" />
                    </div>
                    <div>
                        <input type="password" placeholder="Senha" className="w-full p-3 border border-white outline-none rounded-md" />
                    </div>
                    <Button variant="contained" sx={{ backgroundColor: '#000', color: '#fff' }}>
                        Entrar
                    </Button>
                </form>
            </Box>
        </div >
    )
}