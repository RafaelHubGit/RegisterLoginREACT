import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU)'  
                }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Hola
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto 
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
