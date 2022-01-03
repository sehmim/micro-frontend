import i18next from 'i18next'
import { ChangeEvent, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hooks/rtk'
import { updateProductsList } from '../../slices/products/productsSlice'
import { Product } from '../../types'
import { Dropdown } from '../common'
import SearchInput from '../common/SearchInput'

import FuzzySearch from 'fuzzy-search';
import * as _ from "lodash";
import { getProducts } from '../../services'

interface Props {

}

const FiltersWrapper = styled.div`
    margin: 5px;
    padding: 10px;
    border: 1px solid rgba(153,153,153, 0.2);   
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const SEARCH_PARAMETERS = ['supports', 'id', 'title']

function Filters({ }: Props): ReactElement {
    const { t } = useTranslation();
    const dispatch = useAppDispatch()
    const { products } = useAppSelector(state => state.Products)

    const handleTranslation = (lang: string) => {
        i18next.changeLanguage(lang)
    }

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const debounce = _.debounce(async () => {
            const { payload: products } = await dispatch(getProducts())

            const searcher = new FuzzySearch(products as Product[], SEARCH_PARAMETERS, {
                caseSensitive: false
            });

            dispatch(updateProductsList(searcher.search(e.target.value)))
        }, 1000);

        debounce()
    }

    return (
        <FiltersWrapper>
            <Container>
                <SearchInput handleOnChange={handleSearch} />
                <label data-testid="products-label">{t('productCount')} : {products.length}</label>
            </Container>
            <Dropdown onChange={handleTranslation} initial='--lang--' values={['en', 'fr', 'es']} />
        </FiltersWrapper>
    )
}

export default Filters
