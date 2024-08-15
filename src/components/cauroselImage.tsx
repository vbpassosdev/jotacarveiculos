
type Propes={
    imgurl : string
}

export function CauroselImage(propes:Propes){
    return(
    <img src={propes.imgurl} /> 
    )
}