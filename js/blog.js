const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

document.addEventListener("DOMContentLoaded", function() {
    fetch("../database/jsonData.json")
      .then(res => res.json())
      .then(json => {
        json.blogs.forEach(data => {
          if (data.id === id) {
            const tbody = document.getElementById("blog");
            tbody.appendChild(td_blog(data));
          }
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
});

// create td
function td_blog(item) {
  const div = document.createElement('div');
  div.innerHTML = `
      <div class="title_container">
        <div class="category">${item.tags}</div>
        <div class="title">${item.title}</div>
        <div class="info">A conversation with Fereshteh Forough, founder and president of Afghanistan’s Code to Inspire
        </div>
        <div class="author_details">
            <div class="profile_image"><img src="/assests/profile_image_large.png" alt=""></div>
            <div class="profile_name">${item.author}</div>
            <div class="other_details"> | 4 min read | ${item.date}</div>
        </div>
        <hr>
    </div>
    <div class="blog_content">
        <div class="text_section">
            <img src="/assests/Rectangle 99.png" alt="">
            <p>${item.content}</p>
        </div>
        <div class="video_section">
            <div class="title">Watch a video</div>
            <iframe width="560" height="315" src="${item.youtube.replace("watch?v=", "embed/")}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="like_comment_section">
            <hr>
            <div class="buttons_l_c">
                <img class="like_icon" src="assests/like_icon.png" alt="">
                <span>342</span>
                <img class="comment_icon" src="assests/comment_icon.png" alt="">
            </div>
            <hr class="below">
        </div>
    </div>`;
  return div;
}
