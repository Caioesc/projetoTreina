import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyNavBar.css';
import MyThemeSwitcher from '../MyThemeSwitcher/MyThemeSwitcher';
import MyAvatar from '../MyAvatar/MyAvatar';

function MyNavBar(){
    return(
        <>
            <Container fluid>
                <Row>
                    <Navbar
                        expand="sm"
                        sticky='top'
                        bg="dark"
                        data-bs-theme="dark"
                    >
                        <Container>
                            <MyThemeSwitcher />
                            <Nav variant='tabs' className="justify-content-center">
                                <Nav.Link as={Link} to="/editar-curriculo">Editar</Nav.Link>
                                <Nav.Link as={Link} to="/exibir-curriculo">Exibir</Nav.Link>
                            </Nav>
                            <MyAvatar />
                        </Container>
                    </Navbar>
                </Row>
            </Container>
            <br />
        </>
    );
}

export default MyNavBar;
