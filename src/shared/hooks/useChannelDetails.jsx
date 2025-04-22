import { useState } from "react";
import toast from "react-hot-toast";
import { getChannelDetails as getChannelDetailsRequest } from "../../services";

export const useChannelDetails = () => {
    const [ChannelDetails, setChannelDetails ] = useState();

    const getChannelDetails = async () =>{
        const responseData = await getChannelDetailsRequest(id)

        if(responseData.error) {
           return toast.error(
                responseData.e?.response?.Data || 'Error al cargar la informacion del canal'

           )
            
        }
        setChannelDetails(responseDataData)
        
    }
    {
        return {
            ChannelDetails,
            isFetching: !ChannelDetails,
            getChannelDetails
        }
    }
}