// Adding color function on click
function buttonClick(ele) {
  let NavBar = document.getElementsByClassName("s1btn1");
  for (let i = 0; i < NavBar.length; i++) {
    NavBar[i].style.backgroundColor = "white";
    NavBar[i].style.color = "black";
  }
  let selectedElement = document.getElementById(ele);
  selectedElement.style.backgroundColor = "#ff765d";
  selectedElement.style.color = "white";

  let tbody = document.getElementById("tbody");
  Array.from(document.getElementsByClassName('mainContainer')).forEach(element => {
    element.remove();
  });

  fetch("../database/jsonData.json")
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok ' + res.statusText);
      }
      return res.json();
    })
    .then(json => {
      const filteredBlogs = json.blogs.filter(item => item.tags.includes(String(selectedElement.innerHTML)));
      if (filteredBlogs.length === 0) {
        tbody.innerHTML = "<p>No blogs found for this tag.</p>";
      } else {
        filteredBlogs.forEach(data => {
          tbody.append(td_fun(data));
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
  let tbody = document.getElementById("tbody");
  let tmain = document.getElementById("sec2");

  fetch("../database/jsonData.json")
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok ' + res.statusText);
      }
      return res.json();
    })
    .then(json => {
      json.blogs.forEach(data => {
        tbody.append(td_fun(data));
      });
      tmain.append(td_fun1(json.blogs[0]));
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

// Create td function
function td_fun(item) {
  let div = document.createElement('div');
  div.className = "mainContainer";
  div.innerHTML = `
    <div class="box1">
      <img src=${item.imageurl} alt="" />
      <div class="boxtext">
        <div class="boxdiv">${item.tags}</div>
        <a href="../blog.html?id=${item.id}"><h1>${item.title}</h1></a>
        <a href="../blog.html?id=${item.id}"><p class="boxContent">
          ${item.content.slice(0, 180)}
        </p></a>
        <div class="boxauthor">
          <img src=${item.img0} alt="" class="boxauthorimg" />
          <div class="boxauthorsname">
            <div class="name namestyle">${item.author}</div>
            <div class="date datestyle" style="color: grey;">${item.date}</div>
          </div>
        </div>
      </div>
    </div>
  `;
  return div;
}

function td_fun1(data) {
  let div = document.createElement('div');
  div.innerHTML = `
    <div class="sec2content">
      <img src=${data.imageurl} alt="" />
      <div class="s2text">
        <div class="div">${data.tags}</div>
        <h1>${data.title}</h1>
        <p>${data.content.slice(0, 500)}</p>
        <div class="author">
          <img src=${data.img0} alt="" class="authorimg" />
          <div class="authorsname">
            <div class="name namestyle">${data.author}</div>
            <div class="date datestyle" style="color: grey;">${data.date}</div>
          </div>
        </div>
      </div>
    </div>
  `;
  return div;
}
