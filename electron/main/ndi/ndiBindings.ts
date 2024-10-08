import * as ffi from 'ffi-napi';
import * as ref from 'ref-napi';

const ndiLibPath = 'C:\\Program Files\\NDI\\NDI 6 SDK\\Bin\\x64\\Processing.NDI.Lib.x64.dll';

// Load the NDI library
const ndi = ffi.Library(ndiLibPath, {
  'NDIlib_initialize': ['bool', []],  // Initialize the NDI system
  'NDIlib_send_create': ['pointer', ['pointer']],  // Create an NDI sender
  'NDIlib_send_send_video': ['void', ['pointer', 'pointer']],  // Send a video frame
  'NDIlib_destroy': ['void', []],  // Destroy NDI instance
});

export {ndi}