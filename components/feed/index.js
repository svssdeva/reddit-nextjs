import Post from "../common/Post";
const posts = [
    {
        id: 0, author: `Deveshwar Jaiswal`, title: 'Hello Reddit App via Next JS 1'
    },
    {
        id: 0, author: `Deveshwar Jaiswal`, title: 'Hello Reddit App via Next JS 2'
    },
    {
        id: 0, author: `Deveshwar Jaiswal`, title: 'Hello Reddit App via Next JS 3'
    }
];

const style = {
    wrapper: `space-y-2.5`
}
const Feed = () => {
    return (
       <div className={style.wrapper}>
           {posts.map((post) => (
               <Post {...post}/>
           ))}
       </div>
    )
}

export default Feed