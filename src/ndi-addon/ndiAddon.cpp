#include <napi.h>
#include <Processing.NDI.Lib.h>

Napi::Boolean InitializeNDI(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  bool success = NDIlib_initialize();
  return Napi::Boolean::New(env, success);
}

Napi::Value CreateNDISender(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

    // You can configure the NDI sender creation structure
    NDIlib_send_create_t send_create_desc;
    send_create_desc.p_ndi_name = "NDI Sender Test"; // Set your NDI sender name
    send_create_desc.p_groups = NULL;
    send_create_desc.clock_video = true; // Clock video frames
    send_create_desc.clock_audio = false; // Not clocking audio

    // Create the NDI send instance
    NDIlib_send_instance_t pNDI_send = NDIlib_send_create(&send_create_desc);

  if (!pNDI_send) {
        printf("Error creating NDI sender\n");
    return env.Null();  // Return null if the sender couldn't be created
  }

    printf("NDI sender created successfully\n");
  // Return the sender pointer as a number (for simplicity)
  return Napi::Number::New(env, reinterpret_cast<uintptr_t>(pNDI_send));
}

Napi::Value SendVideoFrame(const Napi::CallbackInfo& info) {
     Napi::Env env = info.Env();

     NDIlib_send_instance_t pNDI_send = reinterpret_cast<NDIlib_send_instance_t>(info[0].As<Napi::Number>().Int64Value());
     int width = 1920;
     int height = 1080;
     int lineStrideBytes = width * 4;

     // Allocate frame buffer
     uint8_t* p_frame = (uint8_t*)malloc(width * height * 4);
     memset(p_frame, 255, width * height * 4);  // Solid white frame

     NDIlib_video_frame_v2_t NDI_video_frame;
     NDI_video_frame.xres = width;
     NDI_video_frame.yres = height;
     NDI_video_frame.FourCC = NDIlib_FourCC_type_BGRA;
     NDI_video_frame.frame_rate_N = 30000;
     NDI_video_frame.frame_rate_D = 1001;
     NDI_video_frame.picture_aspect_ratio = 16.0 / 9.0;
     NDI_video_frame.frame_format_type = NDIlib_frame_format_type_progressive;
     NDI_video_frame.timecode = 0;
     NDI_video_frame.p_data = p_frame;
     NDI_video_frame.line_stride_in_bytes = lineStrideBytes;

     // Send the frame
     NDIlib_send_send_video_v2(pNDI_send, &NDI_video_frame);

     // Free the allocated memory
     free(p_frame);

     return env.Undefined();
}

// Cleanup function
void CleanupNDI(const Napi::CallbackInfo& info) {
  NDIlib_destroy();  // Clean up the NDI system
}

// Init function to expose the NDI methods to Node.js
Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "initializeNDI"), Napi::Function::New(env, InitializeNDI));
  exports.Set(Napi::String::New(env, "createNDISender"), Napi::Function::New(env, CreateNDISender));
  exports.Set(Napi::String::New(env, "sendVideoFrame"), Napi::Function::New(env, SendVideoFrame));
  exports.Set(Napi::String::New(env, "cleanupNDI"), Napi::Function::New(env, CleanupNDI));
  return exports;
}

// Register the addon
NODE_API_MODULE(ndiAddon, Init)