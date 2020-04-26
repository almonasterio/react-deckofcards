import React, { Component } from 'react'
import axios from 'axios'


const API_BASE_URL= "https://deckofcardsapi.com/api/deck" 
export default class Deck extends Component {
    constructor(props){
        super(props);
        this.state ={deck:null, drawn: null}

        this.getCard=this.getCard.bind(this)
    }
    async componentDidMount(){
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
    this.setState({deck : deck.data})


    }

    async getCard(){
        let id = this.state.deck.deck_id;
        let cardUrl=`${API_BASE_URL}/${id}/draw/`;
        let cardRes = await axios.get(cardUrl);
console.log(cardRes.data)
        let card = cardRes.data.cards[0]
    }
    render() {
        return (
            <div className="Deck">
                <h1>Card Dealer</h1>
                <button onClick={this.getCard}>Get Card</button>


                
            </div>
        )
    }
}
