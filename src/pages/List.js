


import React from 'react'


import CharacterCard from '../components/CharacterCard'

import Loader from '../components/Loader'
import Button from '../components/Button'

import { ItemWrapper, ListWrapper } from '../components/Wrapper'

import { Layout } from '../components/RoutesLayout'


import useRequestProcessor from '../hooks/useRequestProcessor'


import { getCharactersList } from '../services/api'





const List = () => {

    const [url, setUrl] = React.useState()

    const { loading, data } = useRequestProcessor({ requestData: getCharactersList, parameters: url })

    const { results: characters } = data || {}



    const handleNextPage = () => {

        //
    }


    const handlePrevPage = () => {

        //
    }

    const handleCardClick = (id) => {

        //
    }



    const charactersBlock = React.useMemo(() => {

        return (characters || []).map((item) => {

            const { id } = item

            return (<CharacterCard
                data={item}
                onClick={() => handleCardClick(id)}
                key={`character-card-${id}`}
            />)
        })

    }, [characters])



    return (<React.Fragment>

        <Layout>

            <ListWrapper>

                {loading && <Loader />}

                {!loading && <React.Fragment>

                    {charactersBlock}

                </React.Fragment>}

            </ListWrapper>


            <ItemWrapper>
                <Button title={'Prev page'} onClick={handlePrevPage} />

                <Button title={'Next page'} onClick={handleNextPage} />
            </ItemWrapper>

        </Layout>

    </React.Fragment>)
}




export default List
