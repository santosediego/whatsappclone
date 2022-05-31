import './ChatListItem.css';

function ChatListItem() {
    return (
        <div className='chatListItem'>
            <img
                className='chatListItem--avatar'
                src=""
                alt=""
            />
            <div className='chatListItem--lines'>
                <div className='chatListItem--line'>
                    <div className='chatListItem--name'>Diego Santos</div>
                    <div className='chatListItem--date'>09:07</div>
                </div>
                <div className='chatListItem--line'>
                    <div className='chatListItem--lastMsg'>
                        <p title='Lorem ipsum dolor sit amet'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis porta velit at euismod. In at nibh mauris. Suspendisse molestie pulvinar consequat. Fusce non odio vitae quam dictum posuere sed iaculis felis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatListItem;