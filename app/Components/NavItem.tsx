import Link from 'next/link'

const NavItem = (props : {text: string, href: string, active: boolean}) => {
    
    const {text, href, active} = props
    return (
        <Link href={href}>
            <a
                className={`nav__item ${
                    active ? "active" : ""
                }`}
            >
                {text}
            </a>
        </Link>
    )
}

export default NavItem