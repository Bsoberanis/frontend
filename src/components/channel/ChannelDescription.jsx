import { useFollowChannel, useUserDatails } from "../../shared/useFollowChannel";

export const followButton = ({channelID, getChannels}) =>{
    const  { useFollowChannel} = useFollowChannel();

    const handleFollowChannel = () => {
        useFollowChannel(channelId, getChannnels)
    }
    return <button onClick={handleFollowChannel} className="channel-follow-button">follow hannel</button>
}
export const ChannelDescription = ({
    username,
    title,
    description,
    channelId
}) => {
    const { isLogged } = useUserDatails();

    return(
        <div className="channel.description-container">
            <span className="channels-description.title">
                {username}
                <span>
                    {isLogged && (
                        <FollowButton
                        className="channel-follow-button"
                        channelId={chanelId}
                        getChannels={getChannels}
                        />
                    )}
                </span>
            </span>
            <span>
                <span className="channel-description-title">{title}</span>
            </span>
                    <div className="channels-description-box">
                        <span className="channel-description">{desciption}</span>
                    </div>
        </div>
    )
}