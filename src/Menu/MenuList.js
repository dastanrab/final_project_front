import {useAuth} from "../Auth/useAuth";
import {cartContext} from "../Cart/useCart";
import {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {BsBasket3} from "react-icons/bs";



export default function MenuList(){
    const { authed, logout,token } = useAuth();
    const {cart} = useContext(cartContext);
    console.log('at menuuuu')
    console.log(cart)

    let navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };
    const handlelogin=()=>
    {
        navigate('/login')
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3" style={{direction : 'rtl'}}>
                <Container fluid>
                    <Navbar.Brand href="#home">گیفت شاپ</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-3">
                            <Nav.Link>
                                {' '}
                                <Link className="text-decoration-none text-white" to="/">
                                    خانه
                                </Link>
                            </Nav.Link>
                            <NavDropdown title="دسته بندی ها" id="basic-nav-dropdown">
                                <NavDropdown.Item >
                                    <Link className="text-decoration-none text-black" to="/tags">
                                        پلی استیشن
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link className="text-decoration-none text-black" to="/tags">
                                        ایکس باکس
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link className="text-decoration-none text-black" to="/tags">
                                        گوگل پلی
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <Nav.Link>
                                {' '}
                                <Link className="text-decoration-none text-white" to="/cart_items">
                                    <BsBasket3 /> {typeof cart !== 'undefined'? cart.count : 0}
                                </Link>
                            </Nav.Link>
                        </Nav>
                        {token !=null && <Nav className="me-auto">
                            <Button variant="primary" onClick={handleLogout}  >
                                خروج
                            </Button>
                        </Nav>}
                        {token == null && <Nav className="me-auto">
                          
                            <Nav.Link>
                                {' '}
                                <Link className="text-decoration-none text-white" to="/login">
                                    ورود
                                </Link>
                            </Nav.Link>
                        </Nav>}


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}