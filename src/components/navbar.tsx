import { Container, Nav, Navbar} from "react-bootstrap";


export function NavBar(){
    return ( 
        <><div>
            <Navbar bg="dark" variant="dark" fixed="top"  >
                <Container>
                <Navbar.Brand href="#home">
                    <img
                    src="/vite.svg"
                    alt="Logo"
                    style={{ width: '80px', height: 'auto' }} // Adjust width as needed
                    />
                </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Catalog">Catalogo</Nav.Link>
                        <Nav.Link href="/Contato">Contato</Nav.Link>
                        
                    </Nav>
 
 
                    <div className="social-icons">
                        <a
                            href="https://wa.me/19997027091" // Substitua pelo seu número do WhatsApp
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            <img src="https://cdn.discordapp.com/attachments/1275126834408849505/1275243577743769731/whatsapp.png?ex=66c52ea1&is=66c3dd21&hm=18145c04a179e53b1587320310d065f01cd9a43b00f6c46ad2cb5a40e1c822df&" 
                            alt="WhatsApp" className="social-icon-img" />
                        </a>
                        <a
                            href="https://www.instagram.com/jot_acar" // Substitua pelo seu perfil do Instagram
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            <img src="https://cdn.discordapp.com/attachments/1275126834408849505/1275243578045763719/Instagram.png?ex=66c52ea1&is=66c3dd21&hm=22b84829acfe118fbece57daf5eb687a84a107c2962179cfce30ca2578ed7be7&" 
                            alt="Instagram" className="social-icon-img" />
                        </a>
                    </div>
                </Container>
                
            </Navbar>       
        </div>
        
        
        </>

    )
}