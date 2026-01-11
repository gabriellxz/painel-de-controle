import { Avatar, Divider } from "@mui/material";
import { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { GoInbox } from "react-icons/go";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const location = useLocation();
  const [open, setOpen] = useState(false);

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <header>
        <div className="bg-[#000401] text-white p-5 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <AiOutlineDashboard className="text-5xl" />
            <Divider orientation="vertical" flexItem />
            {
              open ? <IoMdClose className="text-3xl cursor-pointer" onClick={() => setOpen(!open)} /> :
                <IoMenuSharp className="text-3xl cursor-pointer" onClick={() => setOpen(!open)} />
            }
          </div>
          <div>
            <Avatar {...stringAvatar("Gabriel Silva")} />
          </div>
        </div>
      </header>
      <div className="flex">
        <aside className={`bg-[#000401] text-white h-[calc(100vh-88px)] transition-all duration-300 select-none ${open ? 'w-50 p-5' : 'w-16 p-2'}`}>
          <ul className={`flex flex-col gap-3 mt-10 ${open ? 'items-start' : 'items-center'}`}>
            <Link to="/" className={`w-full p-3 rounded-md dark:${location.pathname === "/" ? "bg-gray-700 text-blue-400" : ""}`}>
              <li className="flex items-center">
                <IoHomeOutline className="inline text-2xl" />
                {open && <span className="ml-2">Dashboard</span>}
              </li>
            </Link>
            <Link to="/estoque" className={`w-full p-3 rounded-md dark:${location.pathname === "/estoque" ? "bg-gray-700 text-blue-400" : ""}`}>
              <li className="flex items-center">
                <GoInbox className="inline text-2xl" />
                {open && <span className="ml-2">Estoque</span>}
              </li>
            </Link>
            <li className="flex items-center">
              <PiUsers className="inline text-2xl" />
              {open && <span className="ml-2">Usuários</span>}
            </li>
            <li className="flex items-center">
              <CiSettings className="inline text-2xl" />
              {open && <span className="ml-2">Configurações</span>}
            </li>
          </ul>
        </aside>
        <main className="flex-1 p-5 h-[calc(100vh-88px)] overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </>
    </ThemeProvider>
  )
}

export default App
