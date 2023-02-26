
import React from 'react'
import MuiTextField  from "@mui/material/TextField"
const TextField = React.forwardRef((props, ref) => {

    return <MuiTextField ref={ref} {...props}/>
})

export default TextField