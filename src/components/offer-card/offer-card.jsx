import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {convertStarRatingToWidthPercent, capitalize} from "../../utils.js";
import BookmarkButton from "../bookmark-button/bookmark-button.jsx";

const OfferCard = (props) => {
  const {offer, onMouseOver, cardStyle, onMouseOut} = props;
  const {id, image, price, name, type, rating, isPremium, isBookmarked} = offer;
  const premiumTag = isPremium
    ? (<div className="place-card__mark"><span>Premium</span></div>)
    : null;

  return (
    <article
      onMouseOver={() => onMouseOver(offer)}
      onMouseOut={() => onMouseOut(null)}
      className={`${cardStyle.article} place-card`}
      id={`offer-${id}`}
    >
      {premiumTag}
      <div className={`${cardStyle.image} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className={`${cardStyle.info} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            offerId={id}
            isBookmarked={isBookmarked}
            cardStyle={cardStyle}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${convertStarRatingToWidthPercent(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {name}
          </Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
  }).isRequired,
  onMouseOver: PropTypes.func.isRequired,
  cardStyle: PropTypes.shape({
    article: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
  onMouseOut: PropTypes.func.isRequired,
};

export default OfferCard;
