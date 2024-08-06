import suprsend from "@suprsend/web-sdk";

const initializeSuprsend = async () => {
  try {
    await suprsend.init(
      "2RilHU8r3Tq46sAwIdqq",
      "SS.WSS.tu39Zuq9kIeDJQc7fMrSytTFui557eO3aYdefKXg",
      {
        vapid_key: "sM-tjrC6ylAkWj2-20gEHnS4VWEAeE5pTnR0feuDhfc",
      }
    );
    await suprsend.web_push.register_push();
    console.log("Push registration successful");

    const permission = suprsend.web_push.notification_permission();
    console.log(`Notification permission: ${permission}`);
  } catch (error) {
    console.error(
      "Failed to initialize SuprSend SDK or register for push notifications",
      error
    );
  }
};

export default initializeSuprsend;
