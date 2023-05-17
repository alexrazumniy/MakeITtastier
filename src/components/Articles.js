import chicken_legs from "../assets/articles_icons/chicken_legs.svg";
import face_in_mask from "../assets/articles_icons/face_in_mask.svg";
import tasty_chunk_donates from "../assets/articles_icons/tasty_chunk_donates.svg";
import pizza_emoji from "../assets/articles_icons/pizza_emoji.svg";
import arrow_right from "../assets/articles_icons/arrow_right.svg";
import user_avatar_1 from "../assets/articles_icons/user_avatar_1.png";
import user_avatar_2 from "../assets/articles_icons/user_avatar_2.png";
import user_avatar_3 from "../assets/articles_icons/user_avatar_3.png";
import kisspng_humb from "../assets/articles_icons/kisspng-thumb.svg";

const Articles = () => {
  return (
    <div className="articles">
      <p className="articles_title">Articles</p>
      <div>
        <img className="arrow_right" src={arrow_right} alt="" />
      </div>
      <div className="article_item">
        <div className="article_item_img_wrapper yellow">
          <img className="article_item_img" src={chicken_legs} alt="" />
        </div>
        <div>
          <div className="article__title">
            How to cook turkey on Natural Gas
          </div>
          <div className="article_rating_item">
            <img className="user_avatar_1" src={user_avatar_2} alt="" />
            <img className="user_avatar_2" src={user_avatar_1} alt="" />
            <div className="article_rating_bar">
              <img className="kisspng_humb" src={kisspng_humb} alt="" />
              <p className="likes_amount">+28</p>
            </div>
          </div>
        </div>
      </div>
      <div className="article_item">
        <div className="article_item_img_wrapper blue">
          <img className="article_item_img" src={face_in_mask} alt="" />
        </div>
        <div>
          <div className="article__title">
            Corona virus update: 3,43,287+ cases
          </div>
          <div className="article_rating_item">
            <img className="user_avatar_1" src={user_avatar_3} alt="" />
            <img className="user_avatar_2" src={user_avatar_2} alt="" />
            <div className="article_rating_bar">
              <img className="kisspng_humb" src={kisspng_humb} alt="" />
              <p className="likes_amount">+28</p>
            </div>
          </div>
        </div>
      </div>
      <div className="article_item">
        <div className="article_item_img_wrapper pink">
          <img className="article_item_img" src={tasty_chunk_donates} alt="" />
        </div>
        <div>
          <div className="article__title">
            Tasty chunk donutes with chocolate
          </div>
          <div className="article_rating_item">
            <img className="user_avatar_1" src={user_avatar_1} alt="" />
            <img className="user_avatar_2" src={user_avatar_3} alt="" />
            <div className="article_rating_bar">
              <img className="kisspng_humb" src={kisspng_humb} alt="" />
              <p className="likes_amount">+28</p>
            </div>
          </div>
        </div>
      </div>
      <div className="article_item">
        <div className="article_item_img_wrapper green">
          <img className="article_item_img" src={pizza_emoji} alt="" />
        </div>
        <div>
          <div className="article__title">
            Home made double cheez with popcorn respies
          </div>
          <div className="article_rating_item">
            <img className="user_avatar_1" src={user_avatar_1} alt="" />
            <img className="user_avatar_2" src={user_avatar_2} alt="" />
            <div className="article_rating_bar">
              <img className="kisspng_humb" src={kisspng_humb} alt="" />
              <p className="likes_amount">+28</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
