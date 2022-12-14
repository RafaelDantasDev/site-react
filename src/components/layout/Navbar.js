import { Link } from "react-router-dom"
import Container from "./Container"

function Navbar() {
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contato</Link>
            <Link to='/company'>Empresa</Link>
            <Link to='/newproject'>Novo Projeto</Link>
      </div>
    )
}

export default Navbar