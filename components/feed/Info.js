const style = {
    profilePic: `h-4 w-4 rounded-full`,
    profilePicContainer: `flex items-center space-x-1`,
    wrapper: `flex items-center space-x-1 text-xs text-[#818384]`,
    tag: `cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline`,
    postedBy: `flex items-center space-x-1`
}

const Info = ({author}) => {
    const authorName = `svssdeva`;
    const date = new Date();
  return (
     <section className={style.wrapper}>
         <div className={style.profilePicContainer}>
             <img className={style.profilePic} src="https://i.ibb.co/Ks6r2s5/r-Ll-Cifh-XRJi-T0-Ro-N2-Fj-K-Logo-roundbackground-black.png" alt=""/>
         </div>

         <span className={style.tag}>r/{authorName}</span>
         <span>•</span>
         <div  className={style.postedBy}>
             <span>Posted By {author}</span>
             <span>•</span>
             <span>{date.toTimeString()}</span>
         </div>

     </section>
  )
}

export default Info