import {GiftIcon, ShareIcon, ChatBubbleBottomCenterTextIcon} from "@heroicons/react/24/solid";

const style =  {
  icon: `h-4 w-4 text-[#818384]`, iconContainer: `flex items-center space-x-1 `,
  wrapper: `flex items-center space-x-4 pt-2`, span: `text-xs text-[#818384]`
};
const Actions = () => {
    const comments = 19;
  return (
      <section className={style.wrapper}>
          <div className={style.iconContainer}>
              <ChatBubbleBottomCenterTextIcon className={style.icon}/>
              <span className={style.span}>{comments} comments</span>
          </div>
          <div className={style.iconContainer}>
              <ShareIcon className={style.icon}/>
              <span className={style.span}>Share</span>
          </div>
          <div className={style.iconContainer}>
              <GiftIcon className={style.icon}/>
              <span className={style.span}>Award</span>
          </div>
      </section>

  )
}

export default Actions