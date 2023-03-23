import makeWASocket, { DisconnectReason, useMultiFileAuthState, WASocket } from "@adiwajshing/baileys";
import connection from "./connection";

class Factory {
    props: any;
    socket: any
    public async __init(){
        this.props = await useMultiFileAuthState('./sessions')
        this.socket = makeWASocket( {
            markOnlineOnConnect: true,
            printQRInTerminal: true,
            browser: ['Test Bot', "Safari", "3.0"],
            auth: this.props.state,
            emitOwnEvents: true
        })
        connection(this.socket, this.props, this)
    }
}

const instance = new Factory()
instance.__init()