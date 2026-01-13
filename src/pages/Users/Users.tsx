import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPageOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, useTheme } from "@mui/material";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { usersData } from "../../mock/usersData";
import { Link } from "react-router-dom";

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageOutlined /> : <FirstPage />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPage /> : <LastPageOutlined />}
            </IconButton>
        </Box>
    );
}

export default function Users() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        console.log(event);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Calculate paginated data
    const startIndex = page * rowsPerPage;
    const endIndex = rowsPerPage > 0 ? startIndex + rowsPerPage : usersData.length;
    const paginatedUsers = usersData.slice(startIndex, endIndex);
    const emptyRows = rowsPerPage > 0 ? Math.max(0, (1 + page) * rowsPerPage - usersData.length) : 0;

    return (
        <div>
            <div className="font-light">
                <h1 className="text-3xl">Gerenciamento de usuários</h1>
                <p className="text-zinc-500">
                    Liste e gerencie usuários cadastrados
                </p>
            </div>

            <div className="mt-7">
                <div className="p-3 rounded-md">
                    <div className="flex justify-between ">
                        <h2 className="text-2xl font-light mb-4 dark:text-white">Lista de usuários</h2>
                        <div className="flex items-center gap-2">
                            <Link to="/signUp">
                                <Button sx={{ marginBottom: '16px', backgroundColor: '#374151' }}>
                                    <IoMdAdd />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ backgroundColor: '#000' }}>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="center">Nome</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Cargo</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    paginatedUsers.length > 0 ?
                                        paginatedUsers.map((p: any) => (
                                            <TableRow
                                                key={p.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {p.codigo}
                                                </TableCell>
                                                <TableCell align="center">{p.nome}</TableCell>
                                                <TableCell align="center">{p.email}</TableCell>
                                                <TableCell align="center">{p.cargo}</TableCell>
                                            </TableRow>
                                        )) : <TableRow>
                                            <TableCell colSpan={4} align="center">
                                                Nenhum usuário cadastrado.
                                            </TableCell>
                                        </TableRow>
                                }
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={4} />
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={4}
                                        count={usersData.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        slotProps={{
                                            select: {
                                                inputProps: {
                                                    'aria-label': 'rows per page',
                                                },
                                                native: true,
                                            },
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}