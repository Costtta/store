import { AppBar, Badge, Box, Button, IconButton, Link, Menu, MenuItem, Toolbar } from "@mui/material";
import logo from '../assets/images/logo.avif'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink as RouterLink } from "react-router";

const Navbar = () => {
    const cartState = useSelector(state => state.cart)
    console.log(cartState)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    

    return (
        <Box id= 'navbar'>
            <AppBar position="fixed">
                {/* <Toolbar sx={{backgroundColor: 'black', justifyContent: 'center'}}>
                    <Typography variant="h3">Welcome All</Typography>
                </Toolbar> */}
                <Toolbar sx={{backgroundColor: 'white', justifyContent: 'space-around', color: 'black'}} >
                    <RouterLink to={'/'}>
                        <img src={logo} alt="logo" height={'80px'} />
                    </RouterLink>
                    
                    <Box display={'flex'} alignItems={'center'} sx={{display: {xs: 'none', md: 'flex'}}}>
                        <Button color="white" endIcon={<FavoriteBorderIcon />}><Link sx={{color: 'black', textDecoration: 'none'}} href='#products'>Products</Link></Button>
                        {/* <Button color="white" endIcon={<ShoppingBagOutlinedIcon />}>Shopping Bag <Typography color="white" bgcolor={'red'} borderRadius={'20px'} width={'25px'}>{cartState.length}</Typography></Button> */}
                        {/* <RouterLink to={'/cart'} style={{display: 'flex', alignItems: 'center', color: 'black', textDecoration: 'none'}}>Shopping Bag <Typography color="white" bgcolor={'red'} borderRadius={'20px'} width={'25px'}>{cartState.length}</Typography></RouterLink> */}
                        <RouterLink to={'/cart'} style={{color: 'black'}}>
                            <Button color="black" endIcon={
                                <Badge color="error" badgeContent={cartState.length}>
                                    <ShoppingBagOutlinedIcon />
                                </Badge>
                            }>Shopping Bag
                            </Button>
                        </RouterLink>
                        <Button color="white" endIcon={<LogoutIcon />}>Logout</Button>
                    </Box>
                    <IconButton sx={{display: {md: 'none', sm: 'block'}}}>
                        <MenuIcon
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick} />
                    </IconButton>
                    <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}>
                        <MenuItem>
                            <Button color="white" endIcon={<FavoriteBorderIcon />}>Wish List</Button>
                        </MenuItem>
                        <MenuItem>
                            <RouterLink to={'/cart'} style={{color: 'black'}}>
                                <Button color="black" endIcon={
                                    <Badge color="error" badgeContent={cartState.length}>
                                        <ShoppingBagOutlinedIcon />
                                    </Badge>
                                }>Shopping Bag
                                </Button>
                            </RouterLink>
                        </MenuItem>
                        <MenuItem>
                            <Button color="white" endIcon={<LogoutIcon />}>Logout</Button>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;
