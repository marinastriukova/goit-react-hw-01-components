import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList({friends}) {
    return <ul className="friend-list">
        {friends.map(FriendListItem)}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.array
};

export default FriendList;