import React from "react";
import logo from "../assets/images/logo.avif";
import { Box, Container, Divider, Link, List, ListItem, ListItemButton, Typography } from "@mui/material";

const Footer = () => {
    return (
    <Box component={'footer'} sx={{boxShadow: '0 -5px 10px rgb(0,0,0, 0.2), 0 -5px 10px rgb(0,0,0, 0.2), 0 -2px 10px rgb(0,0,0, 0.2)'}}>
        <Divider />
        <Container>
            <Box display={'flex'} flexDirection={{xs: 'column', sm: 'row'}} alignItems={'center'} justifyContent={'space-between'} className="pt-4">
                    <img style={{height: '20%'}} src={logo} alt="logo" />
                    <List sx={{marginBottom: {xs: '1rem', sm: '0'}}}>
                        <ListItem>
                            <ListItemButton sx={{justifyContent: 'center'}}>
                                
                                    <Link href='#navbar' sx={{color: 'black', textDecoration: 'none', fontSize: '1.1rem'}} >Home</Link>
                                
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton sx={{justifyContent: 'center'}}>
                                <Typography>Contact Us</Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton sx={{justifyContent: 'center'}}>
                                <Typography>Privecy Policy</Typography>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Typography variant="body2">All Copyright 2025 has been Reserved</Typography>
            </Box>
        </Container>
    </Box>
    );
};

export default Footer;