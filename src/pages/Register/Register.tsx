import { Box, Button, styled } from "@mui/material";
import Logo from "../../components/Logo/Logo";
import { useState, useRef } from "react";
import avatar_mock from "../../assets/avatar.webp";
import { IoMdClose } from "react-icons/io";

const style = {
    maxWidth: 650,
    width: "100%",
    bgcolor: '#23262b',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function Register() {

    const [fileValue, setFileValue] = useState<FileList | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center m-3">
            <Box sx={style}>
                <form className="w-full flex flex-col gap-4">
                    <div className="font-light text-center mb-5">
                        <Logo />
                        <h1 className="text-3xl">Cadastro de usuário</h1>
                    </div>
                    <div>
                        <input type="text" placeholder="Nome Completo" className="w-full p-3 border border-white outline-none rounded-md" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" className="w-full p-3 border border-white outline-none rounded-md" />
                    </div>
                    <div>
                        <input type="password" placeholder="Senha" className="w-full p-3 border border-white outline-none rounded-md" />
                    </div>
                    <div>
                        <select name="role" id="role" className="w-full p-3 border border-white outline-none rounded-md">
                            <option value="" disabled selected className="text-black">Selecione o tipo de usuário</option>
                            <option value="admin" className="text-black">Administrador</option>
                            <option value="user" className="text-black">Usuário</option>
                        </select>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-center">
                            <div className="mb-3">
                                <div className="flex justify-end">
                                    {fileValue ? <IoMdClose className="text-2xl cursor-pointer" onClick={() => { setFileValue(null); if (fileInputRef.current) fileInputRef.current.value = ''; }} /> : null}
                                </div>
                                <div>
                                    {
                                        fileValue ? <img
                                            src={fileValue ? URL.createObjectURL(fileValue[0]) : ""}
                                            alt={""}
                                            className="w-50 h-50 rounded-full"
                                        /> : <img
                                            src={avatar_mock}
                                            alt=""
                                            className="w-50 h-50 rounded-full"
                                        />

                                    }
                                </div>
                            </div>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={null}
                            >
                                Escolher arquivo
                                <VisuallyHiddenInput
                                    type="file"
                                    onChange={(event) => setFileValue(event.target.files)}
                                    multiple
                                    ref={fileInputRef}
                                />
                            </Button>
                        </div>
                    </div>
                    <Button variant="contained" sx={{ backgroundColor: '#000', color: '#fff' }}>
                        Entrar
                    </Button>
                </form>
            </Box>
        </div >
    )
}