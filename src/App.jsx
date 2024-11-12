import React, {useState} from 'react';
import notificationsData from './notifications';

const App = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div>
      <h2>Notifications ({notifications.length})</h2>
      <button onClick={clearAllNotifications}>Clear All Notifications</button>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            <strong>{notification.name}</strong>: {notification.message}
            <button onClick={() => clearNotification(notification.id)}>Clear</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;