const BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchPosts() {
  const response = await fetch(`${BASE_URL}/todos`);
  const posts = await response.json();
  //console.log("posts: " + posts);
  return posts;
}

const postsList = document.getElementById("postsList");


function displayPosts(posts) {

  postsList.innerHTML = "";

  // ------------- Variante 1 -----------------
  posts.map(post => ({ 
    title: post.title,
    completed: post.completed,
})).forEach(post => {
    /*
  let s1 = s2 = "";
    if(post.completed){
      s1 = "<s>";
      s2 = "</s>";
    }
    
    postsList.innerHTML += `<li><p><h4>Titel:${s1} ${post.title} ${s2}</h4></p></li>`;
    */
    postsList.innerHTML += `<li><p style="text-decoration: ${post.completed ? "line-though" : "none"}"><h4>Titel:${s1} ${post.title} ${s2}</h4></p></li>`;
    
});

/*
  // ------------- Variante 2 -----------------
  for (let i = 0; i < posts.length; i++) {
    let s1 = s2 = "";
    if(posts[i].completed){
      s1 = "<s>";
      s2 = "</s>";
    }

    postsList.innerHTML += `<li><p><h4>${s1}Titel ${posts[i].id}: ${posts[i].title}${s2}</h4></p></li>`;
  }
*/
}

const result = async () => {
  const pList = await fetchPosts();
  displayPosts(pList);
};

result();
