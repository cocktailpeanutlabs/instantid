module.exports = {
  daemon: true,
  run: [{
    "method": "shell.run",
    "params": {
      "path": "app",
      "venv": "env",
      "message": "python app.py",
      "env": {
        "MODE": "{{input.type}}"
      },
      "on": [{ "event": "/http:\/\/[0-9.:]+/", "done": true }]
    }
  }, {
    "method": "local.set",
    "params": {
      "url": "{{input.event[0]}}"
    }
  }]
}
