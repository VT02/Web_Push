import React, { useState } from "react";
import suprsend from "@suprsend/web-sdk";

const UserProfile = () => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleLogin = async () => {
    if (!userId) {
      alert("Please enter a user ID");
      return;
    }

    suprsend.identify(userId);
    console.log(`User identified with ID: ${userId}`);

    if (email) suprsend.user.add_email(email);
    if (phone) suprsend.user.add_sms(phone);
    if (whatsapp) suprsend.user.add_whatsapp(whatsapp);

    suprsend.user.set({
      login_method: "email",
      subscription_level: "premium",
    });
  };

  const handleLogout = () => {
    suprsend.reset();
    console.log("User logged out and profile reset");
    setUserId("");
    setEmail("");
    setPhone("");
    setWhatsapp("");
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="tel"
        placeholder="WhatsApp"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
