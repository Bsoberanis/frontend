import { useNavigate } from "react-router-dom";
import { ChannelCard } from "./ChannelCard";


export const  Channels = ({channels}) => {

    const navigate = useNavigate()

    const handleNavigateChannels = (id) => {
        naviagate ('/channel/${id}')
    }

    return (
        <div className="channels-container">
            {channels.map((c)=>(
                <ChannelCard
                key={c.id}
                id={c.id}
                title={c.title}
                username={c.username}
                isOnline={c.isOnline}
                avatarurl={c.avatarurl}
                navigateToChannelHandler={handleNavigateChannels}
                ></ChannelCard>
            ))}
        </div>
    )
}