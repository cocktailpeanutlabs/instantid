module.exports = {
  "run": [{
    method: "shell.run",
    params: {
      message: [
        "git lfs install",
        "git clone https://huggingface.co/spaces/cocktailpeanut/InstantID2 app"
      ]
    }
  }, {
    method: "script.start",
    params: {
      uri: "torch.js",
      params: {
        venv: "env",
        path: "app",
        xformers: true
      }
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",
      path: "app",
      message: [
        "pip install huggingface_hub==0.25.2",
        "pip install -r requirements.txt",
      ]
    }
  }, {
    method: "fs.link",
    params: {
      venv: "app/env"
    }
  }, {
    method: "notify",
    params: {
      html: "Click the 'start' tab to get started!"
    }
  }]
}
