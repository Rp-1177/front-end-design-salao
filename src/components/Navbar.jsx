import { NavLink } from "react-router-dom";

const links = [
    { to: '/', label: 'Início' },
    { to: '/cortes', label: 'Cortes' },
    { to: '/galeria', label: 'Galeria' },
    { to: '/contato', label: 'Contato' },
]

export default function Navbar () {
    return (
        <header className="bg-ameixa text-nevoa">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <NavLink to="/" className="font-display text-xl">
                    Cecília Ramos
                </NavLink>
                <ul className="flex gap-6">
                    {links.map((link) => (
                        <li key={link.to}>
                            <NavLink
                            to={link.to}
                            end
                            className={({ isActive }) =>
                                isActive ? 'text-mel' : 'hover:text-mel'
                        }
                        >
                            {link.label}
                        </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
} 