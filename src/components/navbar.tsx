import { Container, Nav, Navbar} from "react-bootstrap";
import whatsappIcon from '/sistemas/siteJotaCar/veiculos/src/images/whatsapp.png';
import instagramIcon from '/sistemas/siteJotaCar/veiculos/src/images/Instagram.png';

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
                            href="https://wa.me/1234567890" // Substitua pelo seu número do WhatsApp
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            <img src={whatsappIcon} alt="WhatsApp" className="social-icon-img" />
                        </a>
                        <a
                            href="https://www.instagram.com/yourprofile" // Substitua pelo seu perfil do Instagram
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
                        </a>
                    </div>
                </Container>
                
            </Navbar>       
        </div>
        
        
        </>

    )
}