import React from 'react'

const APIData = ({ID, TITLE, BODY}) => {
    return (
        <div className="api-container">
            <div className="api-row">
                <div className="api">
                    <h1 className="api-id">{ID}</h1>
                    <p className="api-title">{TITLE}</p>
                </div>
                <div className="api-detail">
                    <p className="api-body">{BODY}</p>
                </div>
            </div>
        </div>
    )
}

export default APIData
