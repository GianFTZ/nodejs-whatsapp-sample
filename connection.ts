import { DisconnectReason } from "@adiwajshing/baileys";

export default (client: any, starter: any, launcher: any) => {
    client.ev.on('connection.update', (update: any) => {
        const { connection, lastDisconnect } = update;
        if(connection === 'close') {
            const error = lastDisconnect.error
            const shouldReconnect = error?.output?.statusCode !== DisconnectReason.loggedOut
            if (error?.output?.statusCode == DisconnectReason.loggedOut) {}
            return launcher.baileys()
        } else if(connection === 'open') {
            console.log('✅ Connected successfully')
        }
    });
    client.ev.on('creds.update', ((res: any) => {
        starter.saveCreds();
    }));
    return client;
}