{
  "targets": [
    {
      "target_name": "ndiAddon",
      "sources": ["src/ndi-addon/ndiAddon.cpp"],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")",
        "C:/Program Files/NDI/NDI 6 SDK/Include"
      ],
      "libraries": [
        "C:/Program Files/NDI/NDI 6 SDK/Lib/x64/Processing.NDI.Lib.x64.lib"
      ],
      "dependencies": ["<!(node -p \"require('node-addon-api').gyp\")"],
      "cflags!": ["-fno-exceptions"],
      "cflags_cc!": ["-fno-exceptions"],
      "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"]
    }
  ]
}