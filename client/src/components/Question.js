import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ANSWER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Question() {

    const [addAnswer] = useMutation(ADD_ANSWER);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [answerBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    //updated handleFormSubmit() to use the addAnswer() mutation
    const handleFormSubmit = async event => {
        event.preventDefault();

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            setUserLoggedIn(true);
        }
        try {
            // add answer to database
            await addAnswer({
                variables: { answerBody }
            });

            // clear form value
            setBody('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="container text-center" style={{ marginTop: '35%' }}>
            <div className="row align-items-center">
                <div className="col-10 offset-1">
                    <h1 style={{ color: 'black', textDecoration: 'none', fontFamily: 'Libre Baskerville', fontSize: '28px' }}>
                        Who is your favorite comedic television character?
                    </h1>

                    <form onSubmit={handleFormSubmit} value={answerBody}>
                        <textarea value={answerBody} className="form-control" placeholder="Character limit 250" onChange={handleChange}></textarea>
                        <p className={`m-0 ${characterCount >= 250 ? 'text-error' : ''}`}>
                            Character Count: {characterCount}/250
                        </p>
                        <button type="submit" className="btn btn-light col-10" style={{ marginTop: '10px' }}>Submit Answer</button>
                    </form>
                    <p>{userLoggedIn && <span className="ml-2"> You Need to be Logged In!</span>}</p>
                </div>

            </div>
        </div>
    )
}