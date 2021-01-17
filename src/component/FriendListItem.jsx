import PropTypes from 'prop-types';

function FriendListItem({avatar, name, isOnline, id }) {
    
    return  <li key={id} className="friend-item">
                <span className={isOnline? "status-online" : "status-offline"}></span>
                <img className="friend-avatar" src={avatar} alt="" width="48" />
                <p className="name">{name}</p>
            </li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.string
}

export default FriendListItem;