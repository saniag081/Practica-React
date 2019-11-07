import React from 'react';

const AsideItems = props => {
    const { list } = props
    return(
        <>
            {list ?
                <li>programing</li>:
                <>
                    <img src="" alt=""/>
                    <p>ejemplo user</p>
                </>
            }
        </>
    )
}

export default AsideItems;