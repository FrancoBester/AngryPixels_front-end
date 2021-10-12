import React from 'react'
import './CreateNewQuery.css'

function CreateNewQuery() {
    return (
        <>
        <div className="newQueryGrid">
            <header className="createQueryHeader">Create New Query</header>

            <main className="createQueryMain">
                <label>Title:</label>
                <input type="text" name="" id="" />
                <label>Level:</label>
                <input type="text" placeholder="1 - Least Urgent, 3 - Very Urgent"/>
                <label>Description:</label>
                <input type="text" name="" id="" />
                <button
                
                >
                    Create
                </button>

                <button
                
                >
                    Cancel
                </button>
            </main>

        </div>
        </>
    )
}

export default CreateNewQuery
