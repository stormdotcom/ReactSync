// PresenceIndicator.js
import React from "react";

function PresenceIndicator({ user, online }) {
  return (
    <div className={`presence-indicator ${online ? "online" : "offline"}`}>
      <div className="status-circle" />
      <span>{user.name}</span>
    </div>
  );
}

export default PresenceIndicator;
