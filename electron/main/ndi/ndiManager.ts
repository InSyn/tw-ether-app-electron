import { createSender } from './ndiSender';

let ndiStream = null;

function startNDIStream(sourceId) {
    if (!ndiStream) {
        ndiStream = createSender(sourceId);  // Initialize the NDI sender
    }
}

function stopNDIStream() {
    if (ndiStream) {
        ndiStream.stop();
        ndiStream = null;
        console.log('NDI stream stopped');
    }
}

export {
    startNDIStream,
    stopNDIStream,
};