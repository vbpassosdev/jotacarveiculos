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

                    {/* Ícone do WhatsApp */}
                    <Nav.Link href="https://wa.me/19997027091" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://cdn.discordapp.com/attachments/1275126834408849505/1275243577743769731/whatsapp.png?ex=66c728e1&is=66c5d761&hm=af71992b4f317a16a746ab3ad97b8b96be6b13c4c9e0f54397cf89524e6592b4&" 
                            alt="WhatsApp" 
                            className="social-icon-img" 
                            style={{ width: '24px', height: '24px' }} // Ajuste o tamanho conforme necessário
                        />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
