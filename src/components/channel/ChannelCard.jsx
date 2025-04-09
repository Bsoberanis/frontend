const imageURL ='';

const ChannelAvatar = ({url}) => {
    ruturn (
        <div className="channels-avatar-container">
            <img src={url || imageUrl}'100%' heigth='100%' alt"Default avatar"/>
        </div>
    )
}

export const ChannelCard =({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChennelHandler
}) =>{
    const handleNavigate = () => {
        navigateToChennelHandler(id)
    }
    return(
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl}/>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{color: isOnline ? 'green' : 'red'}}>
                {isOnline ? 'Online': Offline}
                
            </span>


        </div>
    )
}