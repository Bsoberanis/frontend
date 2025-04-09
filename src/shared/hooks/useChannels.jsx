import { useState } from "react";
import toast  from "react-hot-toast";
import { getChannels as getChannels, getFollowedChannels } from "../../services/api";

export const useChannels = () => {
    const [ channels, setChannels ] = useState(null)

    const getVhannels = async (isLogged =false) => {
        const channelsData = await getChannelsRequest()

        if(channelsData.error){
            return toast.error(
                cahannelsData
            )
        }

        if(!isLogged){
            return setChannels({
                channels: channelsData.data.channels
            });
        }

        const getFollowedChannelsData = await getFollowedChannels();

        if(followedChannelsData.error){
            return toast.error(
                
                    channelsData.e?.response?.data || 'Ocurre un  error al leer los canales que sigues'
            )

            setChannels({
                channels: channelsData.data.channels,
                followedChannels: channelsData.data.channels.filter(cahannels =>
                    followedChannelsData.data.follewed
                )
            })
        }
    }
}