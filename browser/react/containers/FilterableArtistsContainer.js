import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

class FilterableArtistsContainer extends React.Component {
    constructor(props) {
        super()
        this.state = { currentValue: '' };
        this.collectInput = this.collectInput.bind(this);
    }

    collectInput( currentValue ) {
        this.setState({ currentValue })
        console.log(this.state.currentValue);
    }

    render() {

        const artists = this.props.artists;
        const filtered = artists.filter( artist => artist.name.toLowerCase().match(this.state.currentValue.toLowerCase()));
        return (
            <div>
                We are rendering FilterableArtistsContainer
                <FilterInput collectInput={ this.collectInput }/>
                <Artists artists={ filtered } />
            </div>
        )

    }
}


export default FilterableArtistsContainer;
// syntehicEvent object..
 // safely get the string value from event.target
// this.setState({ inputValue: event.target.value });
// uh oh
// this.setState({ input: event });

// is the reason because the SynthecEvent object disappears and is recreated next time an event is triggered?


// let larry, moe, curly;

// Promise..
// .then( result => [larry, moe, curly] = result)
// // same as
// .then( result => {
//     larry = result[0];
//     moe = result[1];
//     curly = result[2];
// })
