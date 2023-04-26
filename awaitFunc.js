function showMessage(message, delay) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        alert(message);
        resolve();
      }, delay);
    });
  }
  showMessage('hello world')