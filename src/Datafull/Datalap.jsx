import Hp from './Cartcontent/Laptop/pic1.jpg'
import Dell from './Cartcontent/Laptop/pic2.jpg'
import Aser from './Cartcontent/Laptop/pic3.jpg'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
export const Laplist =[
    {
        name : 'Hp',
        description : 'Hp pavilion',
        image : Hp,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarHalfIcon  sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price :  70000
    },
    {
        name : 'Apple',
        description : 'MacBook series',
        image : Dell,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/> <StarRateIcon sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price : 120000
    },
    {
        name : 'Acer',
        description : 'Acer notebook 15',
        image : Aser,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarHalfIcon  sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price : 55000
    },
    
]