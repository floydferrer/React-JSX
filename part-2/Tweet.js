const Tweet = ({username, name, date, message}) => {
    return (
        <div class="tweet">
            <p><b>{name}</b> @{username} - {date}</p>
            <p class="msg">{message}</p>
        </div>
    )
}