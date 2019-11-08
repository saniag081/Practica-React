import React from 'react';
import '../assets/styles/components/AsideContent.css';


const AsideContent = props => {
    const { title, list, children} = props;
    return(
        <div className="aside__friend">
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