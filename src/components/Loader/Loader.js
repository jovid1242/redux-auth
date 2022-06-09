import React from 'react'
import { SemipolarLoading } from 'react-loadingg'

import '../../styles/loader/loader.scss'

function Loader({ visible }) {
    if (visible) {
        return (
            <div className="loader">
                <SemipolarLoading color={'#FFC220'} />
            </div>
        )
    }
    return <></>
}

export default Loader
