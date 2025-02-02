import { Box, Container, Typography} from "@mui/material";
import clothes from '../assets/images/clothes.avif'

const Sales = () => {
    return (
        <Box component={'section'} marginBlock={'3rem'}>
            <Container>
                <Box width={'80%'} margin={'auto'}>
                    <Typography color="red" bgcolor={'black'} textAlign={'center'}>SALES UP TO 50%</Typography>
                </Box>
                <img src={clothes} alt="clothes" style={{width: '100%', marginBlock: '1rem'}} loading="lazy"/>
                <Box width={'80%'} margin={'auto'}>
                    <Typography color="red" bgcolor={'black'} textAlign={'center'}>SALES UP TO 50%</Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Sales;
