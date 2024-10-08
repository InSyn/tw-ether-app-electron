import path from 'path';
import {fileURLToPath} from 'url';
import {createRequire} from "node:module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const require = createRequire(import.meta.url);

const FourCC_type_BGRA = 0x42475241;

export const createSender = async () => {
    let ndiAddon;

    const ndiAddonPath = path.join(__dirname, '../../build/Release/ndiAddon.node');

    try {
        ndiAddon = require(ndiAddonPath);
    } catch (err) {
        process.exit(1);
    }

    if (!ndiAddon.initializeNDI()) {
        process.exit(1);
    }

    const ndiSender = ndiAddon.createNDISender();
    if (!ndiSender) {
        process.exit(1);
    }

    const sendFrame = async () => {
        try {
            ndiAddon.sendVideoFrame(ndiSender);
        } catch (e) {
            clearInterval(frameIntervalId);
        }
    };

    const frameInterval = 1000 / 30;
    const frameIntervalId = setInterval(async () => {
        try {
            await sendFrame()
        } catch (e) {
            clearInterval(frameIntervalId)
        }
    }, frameInterval); // 30 FPS

    setTimeout(() => {
        clearInterval(frameIntervalId);
        ndiAddon.cleanupNDI();
    }, 15000);
};