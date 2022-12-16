


import React from 'react'


import Card from './Card'

import Image from './Image'
import Loader from './Loader'


import InfoBlock from './InfoBlock'




import type { Character, ImageSize } from '../interfaces/main'





const SIZE: ImageSize = {
    width: 17,
    height: 17
}


interface CharacterCardProps {
    loading: boolean
    data: Partial<Character>
    onClick: React.MouseEventHandler<HTMLDivElement>
}



const CharacterCard: React.FC<CharacterCardProps> = (props) => {

    const { loading = false, data: character, onClick } = props
    const { name, image, status, gender, species, type } = character || {}


    return (<Card onClick={onClick}>

        {loading && <Loader {...SIZE} />}

        {!loading && <React.Fragment>
            <Image image={image} {...SIZE} />

            <InfoBlock value={name} fontSize={18} />

            <InfoBlock field={'gender'} value={gender} />

            <InfoBlock field={'species'} value={species} />

            <InfoBlock field={'status'} value={status} />

            {Boolean(type) && <InfoBlock field={'type'} value={type} />}

        </React.Fragment>}
    </Card>)
}




export default CharacterCard
