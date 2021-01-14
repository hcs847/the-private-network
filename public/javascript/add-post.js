document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

async function newPostFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("input[name='post-title']").value;
  const content = document.querySelector("textarea[name='post-content']").value;

  console.log(title, content);
  // const response = await fetch("/api/posts", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     title,
  //     content,
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // if (response.ok) {
  //   // return to dashboard from dashboard from edit/post.id
  //   document.location.replace("/dashboard");
  // } else {
  //   alert(response.statusText);
  // }
}

document.querySelector(".new-post-form").addEventListener("submit", newPostFormHandler);
