import React from 'react';

const FilterInput = (props) => {

    const collectInput = (ev)=> {
        props.collectInput(ev.target.value);
    }

    return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Enter artist name"
        onChange={ collectInput }
      />
    </form>
);
}

export default FilterInput;
