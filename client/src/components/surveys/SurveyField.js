// section 11 - 148
// SurveyField contains logic to reder a single
//label and text input

import React from 'react';

export default ({input}) =>{
    return(
        <div>
            <input {...input}/>
        </div>
    );
};


// export default (props) =>{
//
//     console.log(props);
//     return(
//         <div>
//             <input/>
//         </div>
//     );
// };