function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  btn.onclick = function () {
    let element = document.querySelector('#text');
    if (element.hidden) {
      return element.hidden = false;
    }

    return element.hidden = true;
  }
}


