var push = require('web-push')

let vapidkeys = {
    publicKey: 'BIeRS1Tep5Q-bFJvX7QXfFa_1wp53_FZPHmCPtM_3YK-ficM736TESW1Ig9S_cU4GXP2NCTO8y7X_kzxd8uqPsM',
    privateKey: 'XYi6u0U7vKcrM4b2N99ahbllDCU-s3zhrUzt4Z-jBRo'
}

push.setVapidDetails('mailto:infusiontimer@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey)

let sub= {}

push.sendNotification(sub, 'test message')