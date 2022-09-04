import {UpvoteIcon} from "../common/UpvoteIcon";
import {DownvoteIcon} from "../common/DownvoteIcon";
const style = {
  votes: `py-1 text-xs font-bold text-white`,
  wrapper: `flex flex-col items-center`
};
const Vote = () => {
    const upVotes = 10;
    const downVotes = 5;
  return (
      <div className={style.wrapper}>
         <button>
             <UpvoteIcon/>
         </button>
          <p className={style.votes}>{upVotes - downVotes}</p>
          <button>
              <DownvoteIcon/>
          </button>
      </div>
  )
}

export default Vote