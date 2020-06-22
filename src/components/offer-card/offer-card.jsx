import React from "react";
import PropTypes from "prop-types";
import {convertStarRatingToWidthPercent, capitalize} from "../../utils.js";

const OfferCard = (props) => {
  const {offer, onOfferDetailsOpen, onMouseOver} = props;
  const {image, price, name, type, rating, isPremium} = offer;
  const premiumTag = isPremium
    ? (<div className="place-card__mark"><span>Premium</span></div>)
    : null;
  // const activeBookmark = isBookmarked ? `place-card__bookmark-button--active` : ``;

  return (
    <article
      onMouseOver={() => onMouseOver(offer)}
      className="cities__place-card place-card"
      id={id}
    >
      {premiumTag}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={() => null} className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${convertStarRatingToWidthPercent(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a
            onClick={(evt) => {
              evt.preventDefault();
              onOfferDetailsOpen(offer);
            }}
            href="#"
          >
            {name}
          </a>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onOfferDetailsOpen: PropTypes.func.isRequired,
};

export default OfferCard;
