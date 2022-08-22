import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../store/user'
import { Link } from "react-router-dom"
import { useEffect } from 'react'

import jwtDecode from 'jwt-decode'

function Navbar() {

    const user = useSelector( (state) => state.user )

    const dispatch = useDispatch()

    const handleResponse = (token) => {
        const decodedUser = jwtDecode(token.credential)

        dispatch(
            setUser( decodedUser )
        )

        const element = document.getElementById("google")
        element.parentNode.removeChild(element)

    }

    useEffect(() => {

        window.onload = () => {

            const google = window.google

            google.accounts.id.initialize({
                client_id: '725035071849-31313t24r5k28jo5mndnvcf2m0q7rv22.apps.googleusercontent.com',
                callback: handleResponse
            })

            google.accounts.id.prompt()
    
            google.accounts.id.renderButton(
                document.getElementById('google'),
                { theme: 'outline'}
            )

        }
  
    }, [])



    return ( 
    
        <nav className="flex-block nav just-center items-center">

            <div className="nav-item fw-bold"> TITA SOCIAL </div>

            <div className="nav-item"> 
                <Link to="/">Home</Link>
            </div>

            <div className="nav-item"> 
                <pre> { user.isLogged } </pre>
            </div>

            

            <div className="nav-item free-left cursor-pointer">

                <div id="google"></div>
                { user.isLogged && <div> { user.value.name }</div> }
                
            </div>

        </nav>
    
    )
}

export default Navbar
