import './MessageItem.css'

function MessageItem({ data, user }) {
    return (
        <div
            className='messageLine'
            style={{
                justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
            }}
        >
            <div
                className='messageItem'
                style={{
                    backgroundColor: user.id === data.author ? '#D9FDD3' : '#FFF'
                }}
            >
                <div className='messageText'>
                    {data.body}
                </div>
                <div className='messageDate'>
                    12:02
                </div>
            </div>
        </div>
    )
}

export default MessageItem;