window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("my-form");

  function success() {
    form.reset();
    swal({
      title: "Thanks!",
      text: "Your message has been sended.",
      icon: "success",
    });
  }

  function error() {
    swal({
      title: "Sorry, Your message can't send",
      text: "Please check again the email",
      icon: "error",
    });
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
