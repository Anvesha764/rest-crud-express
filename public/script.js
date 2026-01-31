// confirm before delete
document.addEventListener("submit", function (e) {
  if (e.target.classList.contains("delete-form")) {
    const ok = confirm("Are you sure you want to delete this post?");
    if (!ok) e.preventDefault();
  }
});

// auto focus first input
const firstInput = document.querySelector("input, textarea");
if (firstInput) firstInput.focus();
