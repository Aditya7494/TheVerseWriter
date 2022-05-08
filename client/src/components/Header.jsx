
import {AppBar,Toolbar,styled} from '@mui/material';
import {Menu} from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
height:70px;
background:#fff;
`
const MenuIcon = styled(Menu)`
color:#000;
`
const Image = styled('img')({
    height:70,
    width:120,
    margin:'auto',
    
    


})

const Header = () =>{
    const url = 'https://i.postimg.cc/6Q7Bsyw1/The-Versewriter.jpg';
    return(
        <StyledHeader position="static">
            <Toolbar>
                <MenuIcon/>
                <Image src = {url} alt='logo' />
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;