// import React from 'react';
// import Header from './Header';

// export default ({children}) => 
// <div>
//     <Header />
//     {children}
// </div>


import React from 'react';
import Header from './Header';

export default ({children}) => { console.log(children)
    return(
<div>
    <Header />
    {children}
</div>

    )
}
