import './ChatListItem.css';

function ChatListItem() {
    return (
        <div className='chatListItem'>
            <img
                className='chatListItem--avatar'
                src="https://pps.whatsapp.net/v/t61.24694-24/187140473_140232428480416_4793432016690447685_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=72b36341dd2fdf0664f820697892187c&oe=629D4C9B"
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