import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    {/* Adicione o nome ou logo aqui, se necessário */}
                    Imagens
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/imagens">Imagens</Nav.Link>
                    <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                </Nav>

            </Container>
        </Navbar>
    );
}
