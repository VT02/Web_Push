import React, { useEffect, useState } from "react";
import suprsend from "@suprsend/web-sdk";
import "./NotificationInbox.css";

const NotificationInbox = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      // Fetch notifications from SuprSend
      try {
        const response = await suprsend.inbox.get_notifications();
        setNotifications(response.notifications);
      } catch (error) {
        console.error("Failed to fetch notifications", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notification-inbox">
      <h1>Notification Inbox</h1>
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>
              <h2>{notification.title}</h2>
              <p>{notification.message}</p>
              <span>{new Date(notification.timestamp).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationInbox;
