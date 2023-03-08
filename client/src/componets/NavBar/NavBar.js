import NavBarBS from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

function NavBar() {
    return (
        <NavBarBS variant='dark' bg='dark' expand='lg' sticky='top'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#list'>List</Nav.Link>
                    <Nav.Link href='#about'>About</Nav.Link>
                </Nav>
            </Container>
        </NavBarBS>
    )
}




export default NavBar;