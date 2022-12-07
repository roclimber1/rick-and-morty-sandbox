


import React from 'react'

import { useParams } from 'react-router-dom'


import { ItemWrapper } from '../components/Wrapper'


import CharacterCard from '../components/CharacterCard'

import useRequestProcessor from '../hooks/useRequestProcessor'


import { getCharacter } from '../services/api'




const Details = () => {

    const { id } = useParams()

    const data = useRequestProcessor({ requestData: getCharacter, parameters: id })



    return (<React.Fragment>

        <ItemWrapper>

            <CharacterCard {...data} />

        </ItemWrapper>

    </React.Fragment>)
}




export default Details
