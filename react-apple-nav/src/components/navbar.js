import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {

    return (
        <div>
            <Link to='/'><span>Home  </span></Link>
            <Link to='/mac'><span>Mac  </span></Link>
            <Link to='ipad'><span>iPad  </span></Link>
            <span>iPhone  </span>
            <span>Watch  </span>
            <span>TV  </span>
            <span>Music  </span>
        </div>
    )
}