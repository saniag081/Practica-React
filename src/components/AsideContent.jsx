import React from 'react';

const AsideContent = props => {
    const { title, list, children} = props;
    return(
        <>
            <h2>{title}</h2>
            {list ?
                <ul>
                    { children }
                </ul>:
                <>
                    {children}
                </>
            }
        </>
    )
}

export default AsideContent;