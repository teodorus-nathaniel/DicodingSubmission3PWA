const webPush = require('web-push');

const vapidKeys = {
	publicKey: 'BNO2RFLEiW03a0vW9jD9gKXvvLeAVCNnCXOJMHZNsZ20PCK78w5Ck9kiSwl1bdFF9NvR-X0pYp7F5OXSiF1cI-A',
	privateKey: 'qoNfQaryxDl3cG6WgrK2XxCHkG3GwNNnf4PAeBuRTLY',
};

webPush.setVapidDetails('mailto:football-league@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);
var pushSubscription = {
	endpoint:
		'https://fcm.googleapis.com/fcm/send/cg8bRp-B9aA:APA91bFzgyXwJeex1UPsm4FWty-N-0LdYPps8ZY54mIlQv1u7nxGENu1hCh9udYOXNn7yAJkoct1025LzpEuFRdWjrO4PRMaUUJXrBcHCfch3HDP7mdKKEleyXh0nrAbPCyGkY10mq1F',
	keys: {
		p256dh: 'BF0WF9+KNUjqPqHHP6QXzXkaN56vPiZrGrvT3vVpWzfCc0RGGng8Zplc2kTdayDHXTe5dbxgSpmbpump+AWVAL0=',
		auth: '4nC731uUAu9D5co1aAiIRg==',
	},
};
var payload = 'Subscribed to match!';

var options = {
	gcmAPIKey: '773525922327',
	TTL: 60,
};

webPush.sendNotification(pushSubscription, payload, options);
