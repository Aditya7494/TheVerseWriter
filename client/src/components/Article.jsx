import {Card, CardContent,Grid, Typography,styled } from "@mui/material";


const Component = styled(Card)`
    margin-bottom: 20px;
    text-align:center;
    
`
const Container = styled(CardContent)`
    align-item:center;
`
const Text = styled(Typography)`
    font-weight:300;
    font-size:22px;
    
`
/*const RightContainer = styled(Grid)`
    margin: 0 0 0 270px;
`*/
const RightContainer = styled(Grid)(({ theme }) => ({
    margin: '0 0 0 270px',
    [theme.breakpoints.down('md')]: {
      margin:'0 0 0 100px'
    },
    [theme.breakpoints.down('sm')]: {
      margin:'0 0 0 70px'
    }
  }));

const Article = ({data}) => {
    return(
        <Component>
            <Container>
                <Grid container>
                    <RightContainer  item>
                        <Text>{data.title}</Text>

                        <Typography>
                            <b>poem</b> by {data.author} / {new Date(data.timestamp).toDateString()}
                        </Typography>
                        <Typography><br/>{data.des1}<br/>{data.des2}<br/>{data.des3}<br/>{data.des4}<br/><br/>{data.des5}<br/>{data.des6}<br/>{data.des7}<br/>{data.des8}<br/><br/>{data.des9}<br/>{data.des10}<br/>{data.des11}<br/>{data.des12}</Typography>
                    </RightContainer>
                </Grid>
            </Container>
        </Component>
    )
}

export default Article;