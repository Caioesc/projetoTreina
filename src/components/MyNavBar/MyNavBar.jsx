import {Container, Nav, Navbar, Row } from 'react-bootstrap';
import './MyNavBar.css';
import MyThemeSwitcher from '../MyThemeSwitcher/MyThemeSwitcher';

import MyAvatar from '../MyAvatar/MyAvatar';


function MyNavBar(){
    return(
        <>
            <Container fluid>
                {/* <MyPrint></MyPrint> */}
                <Row>
                        <Navbar
                            expand="sm"
                            sticky='top'
                            bg="dark"
                            data-bs-theme="dark"
                        >
                            <Container>
                            <MyThemeSwitcher></MyThemeSwitcher>
                                <Nav variant='tabs' className=" justify-content-center">
                                    <Nav.Link href="#editar">Editar</Nav.Link>
                                    <Nav.Link href="#exibir">Exibir</Nav.Link>
                                </Nav>
                                <MyAvatar></MyAvatar>
                            </Container>
                        </Navbar>
                </Row>
            </Container>
        </>
    );
}

export default MyNavBar;