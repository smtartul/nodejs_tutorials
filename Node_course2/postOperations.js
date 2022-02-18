const newPost = process.argv.slice(2);


const posts = [
    { name: 'Hello Word', author: 'Node' },
    { name:'I am learning Js', author: 'JS' },
    { name: 'React is easy framework to learn', author: 'React' },
    { name: 'Redux seems so complitaced', author: 'Redux' },
]

const getAllPosts = () => {
    posts.map(post => {
        console.log("post: ",post.name," author:", post.author)
    })
}
const addNewPost = (newPostObj) => {
    const postpromise = new Promise((resolve, reject) => {
        posts.push(newPostObj);
        resolve(posts)
    })
}

async function processAddPost() {
    try {
        const newPostObj = { name: newPost[0], author: newPost[1] }
        await addNewPost(newPostObj)
        getAllPosts();

    } catch (error) {
        console.log(error);
    }
}

if (newPost.length > 0) {
    console.log("Yeni post ekleniyor...");
    processAddPost()
} else {
    getAllPosts();
}