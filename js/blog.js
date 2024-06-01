const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

document.addEventListener("DOMContentLoaded", function() {
    var tbody = document.getElementById("blog");

    // fetch function
    fetch("../database/jsonData.json")
      .then(res => res.json())
      .then(json => {
        json.blogs.map(data => {
          console.log("data1", data);
          // tbody.innerHTML += td_fun(data);
          // tbody.append(td_blog(data));
         if (data.id === id) tbody.innerHTML = td_blog(data).innerHTML;
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });

  // create td
  function td_blog(item) {
    console.log("item000", item ,item.id);
    let loading =window.location.href.split("=")[1];
    if (item.id==loading){
      let div = document.createElement('div');
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
            <p>${item.content}
                </p>
        </div>
        <div class="video_section">
            <div class="title">Watch a video</div>
            <video src="" controls >
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
        `;
        return div;
    }
    }

    document.addEventListener("DOMContentLoaded", function() {
      const searchInput = document.getElementById("searchInput");
      const searchButton = document.getElementById("searchButton");
      const searchResults = document.getElementById("searchResults");
  
      // Function to perform the search
      function performSearch() {
          // Clear previous search results
          searchResults.innerHTML = '';
  
          // Get the search term
          const searchTerm = searchInput.value.trim();
  
          // Perform the search (you can replace this with your actual search logic)
          // For demonstration, just displaying the search term
          searchResults.textContent = `Search results for: ${searchTerm}`;
      }
  
      // Add event listener to the search button
      searchButton.addEventListener("click", performSearch);
  
      // Optionally, you can also trigger the search on pressing Enter key
      searchInput.addEventListener("keypress", function(event) {
          if (event.key === "Enter") {
              performSearch();
          }
      });
  });
  
