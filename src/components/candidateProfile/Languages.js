import React, { Component } from 'react';

export const Languages = ({languages}) => (
    <div className="section languages">
        <p className="section-title">Languages</p>
        <div className="language-list">
            {
                languages.map((item, id)=> (
                    <button className="btn btn-default button-default" key={`languages-${id}`}>{item}</button>
                ))
            }
        </div>
    </div>
);

export default Languages