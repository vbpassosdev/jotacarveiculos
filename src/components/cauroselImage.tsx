
import { FALLBACK_IMAGE } from '../utils/image';

type Propes={
    imgurl : string
}

export function CauroselImage(propes:Propes){
    return(
        <img
            src={propes.imgurl || FALLBACK_IMAGE}
            alt="Imagem do produto"
            loading="lazy"
            onError={(event) => {
                event.currentTarget.src = FALLBACK_IMAGE;
            }}
        /> 
    )
}