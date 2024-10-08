import { desktopCapturer } from 'electron';

async function captureWindow(windowName) {
    const sources = await desktopCapturer.getSources({ types: ['window'] });
    // console.log('Available Windows:', sources.map(source => source.name));
    // const targetWindow = sources[0]
    const targetWindow = sources.find(source => source.name === windowName);

    if (targetWindow) {
        console.log(`Captured window: ${targetWindow.name}`);
        return targetWindow.id;
    } else {
        console.error('Window not found');
        return null;
    }
}

export { captureWindow };