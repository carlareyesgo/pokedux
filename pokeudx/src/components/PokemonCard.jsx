import {Card} from 'antd';
import Meta from 'antd/es/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';
import './PokemonList.css'
import StarButton from './StarButton';


const PokemonCard = ({name, image, types, id, favorite}) => {
    const dispatch = useDispatch()
    const typeString = types.map(elem => elem.type.name).join(', ')

const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}))
}

    return (
    <Card 
    title={name}
    cover= {<img src={image} alt={name}/>}
    extra= {<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
    >
     <Meta description={typeString} />
    </Card>
    )
}

export default PokemonCard;