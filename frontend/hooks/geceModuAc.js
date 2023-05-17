import { useState } from "react";

export const geceModuAc = () => {
    const [value, setValue] = useState();

    const changeHandler = () => {
        setValue(!value)
    }
    return [value, changeHandler];
}

// import { useState } from "react";

// export const geceModuAc = () => {
//     const [geceModu, setValue] = useState();

//     const gecemoduHandler = () => {
//         setValue(!geceModu)
//     }
//     return [geceModu, gecemoduHandler];
// }

