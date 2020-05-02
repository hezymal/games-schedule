import { Socket } from "phoenix";

const socket = new Socket("/api/socket");
socket.connect();

export default socket;
