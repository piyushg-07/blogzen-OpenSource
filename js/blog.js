const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

document.addEventListener("DOMContentLoaded", function() {
    var tbody = document.getElementById("blog");

    // fetch function
    fetch("../database/jsonData.json")
        .then(res => res.json())
        .then(json => {
            json.blogs.map(data => {
                if (data.id === id) {
                    tbody.innerHTML = td_blog(data).innerHTML;
                    // Store the title in local storage
                    localStorage.setItem('breadblog', data.title);
                    // console.log(data.title);
                    updateBreadcrumb(data.title); // Update breadcrumb with the current blog title
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });

        const homeLink = document.getElementById('homeLink');
            homeLink.addEventListener('click', function() {
                localStorage.removeItem('breadblog');
            });
});

// create td
function td_blog(item) {
    let loading = window.location.href.split("=")[1];
    if (item.id == loading) {
        let div = document.createElement('div');
        div.innerHTML = `
            <div class="title_container">
                <div class="category">${item.tags}</div>
                <div class="title">${item.title}</div>
                <div class="info">A conversation with Fereshteh Forough, founder and president of Afghanistan’s Code to Inspire</div>
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
                    <video src="" controls>
                        Your browser does not support the video tag.
                    </video>
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
            </div>
        `;
        return div;
    }
}

function updateBreadcrumb(currentTitle) {
    const breadcrumbContainer = document.querySelector('.breadcrumb');
    if (breadcrumbContainer) {
        const currentBlogItem = document.createElement('li');
        const truncatedTitle = currentTitle.length > 10 ? currentTitle.substring(0, 10) + '...' : currentTitle;
        currentBlogItem.textContent = truncatedTitle;
        breadcrumbContainer.appendChild(currentBlogItem);
    }
}


  
  // Initialize breadcrumb on page load
  document.addEventListener("DOMContentLoaded", function() {
      const breadblogTitle = localStorage.getItem('breadblog');
      if (breadblogTitle) {
          updateBreadcrumb(breadblogTitle);
      }
  });
  
