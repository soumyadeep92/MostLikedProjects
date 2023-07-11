import React from 'react'

const ProjectDetails = (props) => {
    const id = props.params.id;
    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Project Title - {id}</span>
                    <p>Lorem ipsum dolores</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by Net Ninja</div>
                    <div>30-06-2023</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
