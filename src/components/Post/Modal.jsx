
function Modal({ comments, onClose }) {

    return ( 
        <div id="myModal" className="modal">

            <div className="modal-content">

                <div className="flex-block">
                    <div className="close free-left flex-block just-center items-center" onClick={ onClose }>
                        <span >&times;</span>
                    </div>
                </div>
                
                <div className="post-comment-content">

                    { comments.length == 0 && <div className="text-center post-comment-noresult">No comments found.</div>}
                    
        

                    { comments.length > 0 && comments.map( (comment, index) => {

                        return ( 
                            <div className="p-5" key={ index }>

                                <div className="post-comment">

                                    <div className="flex-block">

                                        <div>

                                            <img className="avatar-img" src={ comment.owner.picture }></img>

                                        </div>

                                        <div className="grow-1">

                                            <div className='color-6b7280'> { comment.owner.firstName }  { comment.owner.lastName }</div>

                                            <div className='color-6b7280'> {  new Date( comment.publishDate ).toLocaleString('en-GB', { timeZone: 'UTC' }) }</div>

                                        </div>

                                    </div>

                                    <div className="pt-3">
                                        { comment.message }
                                    </div>
                                </div>
                                
                            </div>
                        )

                    })}

                </div>
               

            </div>

        </div>
    )
}

export default Modal