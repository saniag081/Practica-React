import React from 'react';

const AsideItems = props => {
    const { list } = props
    return(
        <>
            {list ?
                <li>programing</li>:
                <div>
                    <img src="" alt=""/>
                    <p>ejemplo user</p>
                </div>
            }
        </>
    )
}

export default AsideItems;