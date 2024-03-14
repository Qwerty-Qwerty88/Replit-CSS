;(function() {
  var selem = document.currentScript;

  var button = document.createElement('button');
  button.className = "btn btn-secondary";
  button.innerHTML = '<svg width="25" height="25" viewBox="0 0 32 32" fill="none" style="margin-right:8px" xmlns="http://www.w3.org/2000/svg" class="align-middle"><defs></defs><path d="M7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12H8.5C7.67157 12 7 11.3284 7 10.5V5.5Z" fill="#F26207"></path><path d="M17 12H25.5C26.3284 12 27 12.6716 27 13.5V18.5C27 19.3284 26.3284 20 25.5 20H17V12Z" fill="#F26207"></path><path d="M7 21.5C7 20.6716 7.67157 20 8.5 20H17V26.5C17 27.3284 16.3284 28 15.5 28H8.5C7.67157 28 7 27.3284 7 26.5V21.5Z" fill="#F26207"></path></svg>Authorize with Replit';

  if (location.protocol !== 'https:') {
    var err = document.createElement('div');
    err.className = "replit-auth-error";
    err.textContent = 'Replit auth requires https!';
    selem.parentNode.insertBefore(err, selem);
  }

  button.onclick = function() {
    // var authWindow = window.open('https://repl.it/auth_with_repl_site?domain=' + location.host)
    window.addEventListener('message', authComplete);

    var h = 500;
		var w = 350;
		var left = (screen.width / 2) - ( w / 2);
		var top = (screen.height / 2) - (h / 2);

    var authWindow = window.open(
      'https://replit.com/auth_with_repl_site?domain='+location.host,
      '_blank',
      'modal =yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left)

    function authComplete(e) {
      if (e.data !== 'auth_complete') {
        return;
      }

      window.removeEventListener('message', authComplete);

      authWindow.close();
      if (selem.attributes.authed.value) {
        eval(selem.attributes.authed.value);
      } else {
        location.reload();
      }
    }
  }

  selem.parentNode.insertBefore(button, selem);
})();