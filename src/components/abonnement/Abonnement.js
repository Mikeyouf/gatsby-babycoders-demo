import React, {useState} from 'react'
import styled from "styled-components"

import couches from '../../../static/image-4.jpg'

const BuyButton = styled.button`
  padding: 20px;
  background: ${props => props.theme.colors.secondaryAccent};
  font-weight: 700;
`

const Dropdown = styled.select`
  display: block;
  padding: 10px;
  margin: 10px 0;
  background: ${props => props.theme.colors.secondaryAccent};
  font-weight: 700;
  border: none;
  outline: none;
`
const DropdownOption = styled.option`
  padding: 10px;
  background: ${props => props.theme.colors.secondaryAccent};
  font-weight: 700;
  border: none;
  outline: none;
`

const Wrapper = styled.div`
    margin: 20px;
`

const Abonnement = () => {
    const [ selected, setSelected ] = useState('naissance')
    return (
        <Wrapper>
            <h2>ABONNEMENT</h2>
            <Dropdown
                id="Choix de la box"
                onChange={(e) => setSelected(e.target.value)}
                value={selected}>
                <DropdownOption key="naissance">Naissance</DropdownOption>
                <DropdownOption key="taille 1">Taille 1</DropdownOption>
                <DropdownOption key="taille 2">Taille 2</DropdownOption>
                <DropdownOption key="taille 3">Taille 3</DropdownOption>
                <DropdownOption key="taille 4">Taille 4</DropdownOption>
                <DropdownOption key="taille 5">Taille 5</DropdownOption>
            </Dropdown>
            <BuyButton
                className='snipcart-add-item'
                data-item-id='abonnement-1'
                data-item-price='35.00'
                data-item-name='Box de couches'
                data-item-description='Box contenants des couches pour 1 mois'
                data-item-image={couches}
                data-item-url={"https://baby-coders.netlify.com/abonnement"} //REPLACE WITH OWN URL
                data-item-custom1-name="Choix de la box"
                data-item-custom1-options="naissance | taille 1 | taille 2 | taille 3 | taille 4 | taille 5"
                data-item-payment-interval="Month"
                data-item-custom1-value={selected}
                >
                Je désire m'abonner!
            </BuyButton>
        </Wrapper>
    )
}

export default Abonnement