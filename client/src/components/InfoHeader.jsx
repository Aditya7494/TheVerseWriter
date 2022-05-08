import {Box, Typography,styled} from '@mui/material';

/*const Container = styled(Box)`
background: #f44336;
color:#ffffff;
text-align:center;
`*/

const Container = styled(Box)(({ theme }) => ({
    background: '#f44336',
    color: '#FFFFFF',
    //display: 'flex',
    alignItems: 'center',
    textAlign:'center',
   // height: 48,
   // marginBottom: 30,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const InfoHeader = () =>{
    return(
        <Container>
            <Typography>Read Beautiful Hindi Write-ups</Typography>
            <Box>

            </Box>
        </Container>
    )
}

export default InfoHeader;