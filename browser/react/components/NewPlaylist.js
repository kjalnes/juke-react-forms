import React from 'react';

const NewPlayList = ( props ) => {

    const collectInput = (ev) =>  {
        props.setInput(ev.target.value)
    }

    return (

        <div className='well'>
            <form className='form-horizontal' onSubmit={ props.onFormSubmit }>
                <fieldset>
                    <legend>Our amazing playlist!</legend>
                    <div className='form-group'>
                        <label className='col-xs-2 control-label'>Name</label>
                        <div className='col-xs-10'>
                            <input className='form-control' type='text' value={ props.inputValue } onChange={ collectInput }/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-xs-10 col-xs-offset-2'>
                            <button type='submit' className='btn btn-success playlist-btn' disabled={props.btnDisabled} >Create Playlist!</button>
                            <div className='alert alert-warning'>{props.warningMsg}</div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}


export default NewPlayList;
