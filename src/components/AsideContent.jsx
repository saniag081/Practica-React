import React from 'react';

const AsideContent = props => {
    const { title, list, children} = props;
    return(
        <div>
            <h2>{title}</h2>
            {list ?
                <ol>
                    { children }
                </ol>:
                <>
                    {children}
                </>
            }
        </div>
    )
}

export default AsideContent;