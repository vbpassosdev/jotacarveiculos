import { Container, Nav, Navbar } from "react-bootstrap";

export function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    {/* Adicione o nome ou logo aqui, se necessário */}
                    Jota Car Veículos
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Carro">Carro</Nav.Link>
                    <Nav.Link href="/Propaganda">Propaganda</Nav.Link>

                </Nav>

            </Container>
        </Navbar>
    );
}
