export async function fetchArticles() {

  const articles = [
    {
      id: "a1", 
      description: "First article",
      photos: ["bunny1-1.jpeg", "bunny1-2.jpeg"]
    },
    {
      id: "a2", 
      description: "Second article",
      photos: ["bunny2-1.jpeg"]
    },
    {
      id: "a3", 
      description: "Third article",
      photos: ["bunny3-1.jpeg"]
    },
  ]

  return articles;
}

export async function fetchUsers({username, password}) {

  const users = [
    {
      id: "a1",
      username: "bunny",
      email: "bunny@example.com",
      password: "123",
      bio: "Hello I'm bunny",
      image: null
    },
    {
      id: "a2",
      username: "kitty",
      email: "kitty@example.com",
      password: "123",
      bio: "Hello I'm Kitty",
      image: null
    },
  ]

  const user = users.find(user => username === user.username);

  if(!user) {
    const err = new Error("Unauthorized");
    err.status = 401;
    throw err;
  }

  return user;
}