import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid2, Menu, MenuItem, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { useDispatch, useSelector } from "react-redux";
import { clearFilter, colorBlack, colorBlue, colorBrown, colorGreen, colorOrange, colorPurple, colorRed, colorYellow, female, highPrice, lowPrice, male} from "../redux/FilterSlice";
import { addToCart } from "../redux/CartSlice";
import  {useState}  from "react";


const FilterClothes = () => {
    const filterState = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box component={'section'} id="products">
            <Container sx={{marginBlock: '3rem'}}>
                <Typography variant="h5" fontWeight={'bold'} color="gray" textAlign={'center'}>Products</Typography>
                <Box marginBlock={'2rem'}>
                    <Grid2 container spacing={1} flexDirection={{xs: 'column', sm: 'row'}} alignItems={'center'}>
                        <Grid2>
                            <Button variant="outlined" color="black" sx={{fontSize: {xs: '0.6rem', md: '0.8rem'}}} onClick={() => dispatch(male())}>male</Button>
                        </Grid2>
                        <Grid2 sx={{fontSize: {xs: '0.5rem', sm: '1rem'}}}>
                            <Button variant="outlined" color="black" sx={{fontSize: {xs: '0.6rem', md: '0.8rem'}}} onClick={() => dispatch(female())}>female</Button>
                        </Grid2>
                        <Grid2 sx={{fontSize: {xs: '0.5rem', sm: '1rem'}}}>
                            <Button variant="outlined" color="black" sx={{fontSize: {xs: '0.6rem', md: '0.8rem'}}} onClick={() => dispatch(highPrice())}>high price</Button>
                        </Grid2>
                        <Grid2 sx={{fontSize: {xs: '0.5rem', sm: '1rem'}}}>
                            <Button variant="outlined" color="black" sx={{fontSize: {xs: '0.6rem', md: '0.8rem'}}} onClick={() => dispatch(lowPrice())}>Low Price</Button>
                        </Grid2>
                        <Grid2 sx={{fontSize: {xs: '0.5rem', sm: '1rem'}}}>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                variant="outlined" color="black" sx={{fontSize: {xs: '0.6rem', md: '0.8rem'}}} onClick={(event) => {
                                    setAnchorEl(event.currentTarget);
                                }}>select a color
                            </Button>
                                <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                >
                                    <MenuItem sx={{color: 'red'}} onClick={() => dispatch(colorRed())}>
                                        Red
                                    </MenuItem>
                                    <MenuItem sx={{color: 'green'}} onClick={() => dispatch(colorGreen())}>
                                        Green
                                    </MenuItem>
                                    <MenuItem  sx={{color: 'purple'}} onClick={() => dispatch(colorPurple())}>
                                        Purple
                                    </MenuItem>
                                    <MenuItem sx={{color: 'yellow'}} onClick={() => dispatch(colorYellow())}>
                                        Yellow
                                    </MenuItem>
                                    <MenuItem sx={{color: 'orange'}} onClick={() => dispatch(colorOrange())}>
                                        Orange
                                    </MenuItem>
                                    <MenuItem sx={{color: 'blue'}} onClick={() => dispatch(colorBlue())}>
                                        Blue
                                    </MenuItem>
                                    <MenuItem onClick={() => dispatch(colorBlack())}>
                                        Black
                                    </MenuItem>
                                    <MenuItem sx={{color: 'brown'}} onClick={() => dispatch(colorBrown())}>
                                        Brown
                                    </MenuItem>
                                </Menu>
                        </Grid2>
                        <Grid2>
                            <Button variant="outlined" color="black" sx={{fontSize: {xs: '0.6rem', md: '0.8rem'}}} onClick={() => dispatch(clearFilter())}>Clear filter</Button>
                        </Grid2>
                    </Grid2>
                </Box>
                <Grid2 container spacing={5}>
                    {filterState.data.map((index) => {
                        return(
                        <Grid2 key={index.id} size={{xs: 12, sm: 6, md: 3}}>
                            <Card>
                                <CardMedia image={index.img} component={'img'} alt="hoodies" height={400} sx={{borderRadius: '30px'}}/>
                                <CardContent sx={{textAlign: 'center'}}>
                                    <Typography variant="h5" fontWeight={'bold'} marginBlock={'1rem'}>{index.name}</Typography>
                                    <Typography sx={{opacity: 0.7}}>{index.text}</Typography>
                                </CardContent>
                                <Divider />
                                <CardActions sx={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                                    <Typography>{index.price}$</Typography>
                                    <Box>
                                        <CircleIcon sx={{color: `${index.color?.[0]}`}} fontSize="small"/>
                                        <CircleIcon sx={{color: `${index.color?.[1]}`}} fontSize="small"/>
                                        <CircleIcon sx={{color: `${index.color?.[2]}`}} fontSize="small"/>
                                    </Box>
                                </CardActions>
                                <CardActions sx={{justifyContent: 'center'}}>
                                    <Button variant="outlined" color="black" onClick={() => dispatch(addToCart(index))}>Add to cart</Button>
                                </CardActions>
                            </Card>
                        </Grid2>
                        )
                    })}
                </Grid2>
            </Container>
        </Box>
    )
}

export default FilterClothes;
