import NavBarBS from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <NavBarBS variant='dark' bg='dark' expand='lg' sticky='top'>
            <Container>
                <Nav className='me-auto'>
                    <Link to='/' className='nav-link lg'>Home</Link>
                    <Link to='/TodoApp' className='nav-link'>List</Link>
                </Nav>
            </Container>
        </NavBarBS>
    )
}




export default NavBar;