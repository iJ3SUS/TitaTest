
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../store/posts'
import { openModal } from '../store/comments'
import { useEffect, useState } from 'react'

import Post from '../components/Post/Post'
import Modal from '../components/Post/Modal'

function Home() {

    const comments = useSelector( (state) => state.comments )

    const allPosts = useSelector( (state) => state.posts.value )

    const dispatch = useDispatch()

    const [ searchInput, setSearchInput ] = useState('')

    const posts = filterPost( searchInput, allPosts )

    const closeModal = () => {
        dispatch( openModal(false) )
    }

    useEffect(() => {

        dispatch( getPosts() )
        
    }, [])


    return ( 

        <div>

            { comments.show && <Modal comments={comments.value} onClose={ closeModal } /> }

            <div className="card-wrapper">

                <input className="post-search-input" placeholder="Search tags..."
                    onChange={e => setSearchInput( e.target.value )}
                    value={searchInput} 
                />

            </div>
        
            <div className="posts-wrapper"> 

                { 
                    posts.map( post => {

                        return ( 
                            <Post post={ post } key={ post.id } /> 
                        )
                    
                    }) 
                }
            </div>
        </div>
    )
}

function filterPost(word, array){

    if(word.trim() == ''){

        return array
    }

    const searchValues = word.trim().toLocaleLowerCase().split(' ')

    return array.filter( e => {

        const finded = e.tags.some( tag => {

            return searchValues.some( value => {

                return tag.indexOf(value) != -1
            })

        })

        return finded 

    })

}

export default Home