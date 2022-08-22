import { useSelector, useDispatch } from 'react-redux'
import { openModal, getCommets } from '../../store/comments'
//COMPONENTS
import Tag from './Tag'

function Post({ post }) {

    const dispatch = useDispatch()

    const showComments = (postId) => {
        dispatch( getCommets(postId) ) 
    }

    return ( 
        <div className="card-wrapper"> 

            <div style={{ background: "#FFF", padding: "20px" }}>

                <div className="flex-block">

                    <div>

                        <img className="avatar-img" src={ post.owner.picture }></img>

                    </div>

                    <div className="grow-1">

                        <div className='color-6b7280'> { post.owner.firstName }  { post.owner.lastName }</div>

                        <div className='color-6b7280'> {  new Date( post.publishDate ).toLocaleString('en-GB', { timeZone: 'UTC' }) }</div>

                    </div>

                </div>

                <div className="pt-3 flex-block just-center items-center">

                    <img className="post-img" src={ post.image }></img>

                </div>

                <div className="pt-3">
                    { post.text }
                </div>

                <div className="pt-3 flex-block">

                    { post.tags.map( (tag, index) => {

                        return ( 
                            <Tag tag={ tag } key={ index }/>
                        )

                    })}

                </div>

                <div className="pt-3 flex-block">

                    <div className="flex-block free-left">

                        <div className="pr-2">
                            <div className="fw-bold color-00377b">
                                { post.likes } Likes
                            </div>
                        </div>

                        <div className="pr-2">
                            <div className="cursor-pointer color-6b7280" 
                                onClick={ () => showComments(post.id) }
                            >
                                Comments
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        
        </div> 
    )
}

export default Post