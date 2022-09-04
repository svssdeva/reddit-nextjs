import Vote from "../feed/Vote";
import Actions from "../feed/Actions";
import Info from "../feed/Info";
const style =  {
  post: `flex flex-col space-y-1 cursor-pointer`,
    wrapper: `flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]`,
    postTitle: `text-lg font-medium text-[#D7DADC]`,
    postContent: `text-sm font-light text-[#D7DADC]/80`
}

const Post = ({id, title, author}) => {
    return (
        <section className={style.wrapper}>
            <Vote />
            <div className={style.post}>
                <Info author = {author}/>
                <h1 className={style.postTitle}>{title}</h1>
                <p className={style.postContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Actions/>
            </div>
        </section>

    )
}

export default Post