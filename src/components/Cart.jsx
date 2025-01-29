import React from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container } from '@mui/material';
import { clearAll, deleteFromCart } from '../redux/CartSlice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Cart = () => {
    const cartState = useSelector(state => state.cart)
    const dispatch = useDispatch()
    return (
        <Container sx={{marginTop: '7rem', marginBottom: '3.5rem'}}>
          <Button variant='contained' sx={{marginBlock: 2}} color='warning' onClick={() => dispatch(clearAll())}>Clear All</Button>
            <TableContainer component={Paper} sx={{height: '56vh'}}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Size</StyledTableCell>
                            <StyledTableCell align="center">Color</StyledTableCell>
                            <StyledTableCell align="center">Image</StyledTableCell>
                            <StyledTableCell align="center">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {cartState.map((index) => {
                        return(
                        <StyledTableRow key={index.id}>
                            <StyledTableCell component="th" scope="row">
                                {index.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{index.price}$</StyledTableCell>
                            <StyledTableCell align="center">{index.size.join(" - ")}</StyledTableCell>
                            <StyledTableCell align="center">{index.color.join(" - ")}</StyledTableCell>
                            <StyledTableCell align="center">
                                <img src={index.img} alt="" width={100} height={100} />
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <Button variant='contained' color='error' onClick={() => dispatch(deleteFromCart(index))}>Delete</Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    )})}
                </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}


export default Cart;
