import React from 'react';
import Artists from './Artists';
import FilterInput from './FilterInput';


const FilterableArtistsContainer = (props) => {

    const artists = props.artists;

    return (
        <div>
            We are rendering FilterableArtistsContainer
            <FilterInput />
            <Artists artists={ artists } />
        </div>
    )
}


export default FilterableArtistsContainer;
// syntehicEvent object..
 // safely get the string value from event.target
// this.setState({ inputValue: event.target.value });
// uh oh
// this.setState({ input: event });

// is the reason because the SynthecEvent object disappears and is recreated next time an event is triggered?
