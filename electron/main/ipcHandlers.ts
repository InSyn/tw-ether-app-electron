import { ipcMain } from 'electron';
import { captureWindow } from'./windowCapture/windowCaptureManager';
import { startNDIStream, stopNDIStream } from'./ndi/ndiManager';

ipcMain.handle('start-ndi-stream', async (_, windowName) => {
    console.log()
    const windowSourceId = await captureWindow(windowName);
    if (windowSourceId) {
        startNDIStream(windowSourceId);
    } else {
        console.error('Failed to capture the window for NDI stream.');
    }
});

ipcMain.handle('stop-ndi-stream', () => {
    stopNDIStream();
});

export { ipcMain }