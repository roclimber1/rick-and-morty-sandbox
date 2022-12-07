


import React from 'react'


import Card from '../components/Card'

import Image from './Image'
import Loader from './Loader'


import InfoBlock from './InfoBlock'







const SIZE = {
    width: 17,
    height: 17
}



const CharacterCard = (props) => {

    const { loading = false, data: character, onClick } = props
    const { name, image, gender, species } = character || {}


    return (<Card onClick={onClick}>

        {loading && <Loader {...SIZE} />}

        {!loading && <React.Fragment>
            <Image image={image} {...SIZE} />

            <InfoBlock value={name} fontSize={18} />

            <InfoBlock field={'gender'} value={gender} />

            <InfoBlock field={'species'} value={species} />

        </React.Fragment>}
    </Card>)
}




export default CharacterCard
