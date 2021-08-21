import React, {useState, useEffect} from 'react'



const useData = () => {

    const [openForm, setOpenForm] = useState(false)


    return{
        openForm,
        setOpenForm
    }

}






export default useData;