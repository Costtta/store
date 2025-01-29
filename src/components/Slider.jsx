import { Box, Button, ButtonGroup, Grid2, Typography } from "@mui/material";
import {sliderData} from '../assets/Fake Data/FakeData'
import { useDispatch, useSelector } from "react-redux";
import { nextSlide, prevSlide } from "../redux/SliderSlice";



const Slider = () => {
    const sliderIndex = useSelector(state => state.slider.value)
    const dispatch = useDispatch();

    return (
        <Box marginTop={'80px'}>
            <Grid2 container justifyContent={'center'} size={12}>
                    {sliderData.map((index) => {
                        return(
                            <Grid2 key={parseInt(index.id)} sx={parseInt(index.id) === sliderIndex ? {display: 'block', transition: '0.3s', width: '100%', position: 'relative'} : {display: 'none', transition: '0.3s'}}>
                                <img src={index.img} alt="" style={{width: '100%', height: 'calc(100vh - 150px)'}} loading="eager"/>
                                <Typography variant="body1" color="white" textAlign={'center'} sx={{position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)'}}>{index.text}</Typography>
                            </Grid2>
                        )
                    })}
            </Grid2>
            <ButtonGroup sx={{justifyContent: 'center', display: 'flex', marginTop: '1rem'}}>
                <Button variant="contained" onClick={() => dispatch(prevSlide(sliderIndex - 1))}>Prev</Button>
                <Button variant="contained" onClick={() => dispatch(nextSlide(sliderIndex + 1))}>Next</Button>
            </ButtonGroup>
        </Box>
    )
}

export default Slider;
