const blog = async () => {
    const posts = [{ title: "POST1" }, { title: "POST2" }, { title: "POST3" }];
  
    function createPost(post) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          posts.push(post);
          const err = false;
          if (!err) {
            resolve();
          } else {
            reject("Error: Something went wrong");
          }
        }, 2000);
      });
    }
  
    const user = {
      username: "ayesha",
      lastactivitytime: "12th of oct",
    };
  
    const printPost = () => {
      posts.forEach((post) => {
        console.log(post.title);
      });
    };
  
    const deleteBlog = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (posts.length > 0) {
            const poppedElement = posts.pop();
            resolve(poppedElement);
          } else {
            reject("ERROR");
          }
        }, 1000);
      });
    };
  
    function updateLastUserActivityTime() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          user.lastactivitytime = new Date().getTime();
          resolve(user.lastactivitytime);
        }, 1000);
      });
    }
  
    let showPost = await printPost();
    let createpost, deletepost, updatelastUserActivityTime;
  
    try {
      [createpost, updatelastUserActivityTime , deletepost,] = await Promise.all([
        createPost({ title: "POST6", body: "This is Post Six" }),
        updateLastUserActivityTime(),
        deleteBlog()
      ]);
      console.log(updatelastUserActivityTime);
    } catch (err) {
      console.log(err);
    }
  
    return showPost;
  };
  
  blog().then((msg) => {
    console.log(msg);
  });
