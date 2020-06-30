import React from "react";
import PropTypes from "prop-types";
import {EstateType} from "../../const.js";
import {convertStarRatingToWidthPercent, capitalize} from "../../utils.js";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import Map from "../map/map.jsx";
import {OfferClassNamesForPageType} from "../../const.js";

const MAX_PHOTOS = 6;

const OfferDetails = (props) => {
  const {offer} = props;
  const {photos, name, description, type, rating, bedrooms, guests, price, equipment, host, isPremium, reviews, offersNearby} = offer;
  const reviewsCount = reviews.length;
  const premiumTag = isPremium
    ? (<div className="property__mark"><span>Premium</span></div>)
    : null;
  const bedroomsText = bedrooms > 1 ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`;
  const guestsText = guests > 1 ? `Max ${guests} adults` : `Max ${guests} adult`;

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {photos.slice(0, MAX_PHOTOS).map((photo, i) => {
            return (
              <div key={`${i}-${photo.src}`} className="property__image-wrapper">
                <img className="property__image" src={photo.src} alt={photo.alt}/>
              </div>
            );
          })}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {premiumTag}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {name}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `${convertStarRatingToWidthPercent(rating)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {capitalize(type)}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedroomsText}
            </li>
            <li className="property__feature property__feature--adults">
              {guestsText}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {equipment.map((item, i) => {
                return (
                  <li key={`${i}-${item}`} className="property__inside-item">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="property__user-name">
                {host.name}
              </span>
            </div>
            <div className="property__description">
              {description.map((parapraph, i) => {
                return (
                  <p key={`${i}-p`} className="property__text">
                    {parapraph}
                  </p>
                );
              })}
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
            <ReviewsList
              reviews={reviews}
            />
            <form className="reviews__form form" action="#" method="post">
              <label className="reviews__label form__label" htmlFor="review">Your review</label>
              <div className="reviews__rating-form form__rating">
                <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </div>
              <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
              <div className="reviews__button-wrapper">
                <p className="reviews__help">
                  To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <section className="property__map map">
        <Map
          offers={offersNearby}
        />
      </section>
    </section>
  );
};

OfferDetails.propTypes = {
  offer: PropTypes.shape({
    photos: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
        })
    ).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.oneOf([EstateType.APARTMENT, EstateType.ROOM, EstateType.HOTEL, EstateType.HOUSE]).isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    equipment: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
    isPremium: PropTypes.bool.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          user: PropTypes.shape({
            name: PropTypes.string.isRequired,
          }).isRequired,
          date: PropTypes.string.isRequired,
        })
    ).isRequired,
    offersNearby: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
          coordinates: PropTypes.arrayOf(
              PropTypes.number
          ).isRequired,
        })
    ).isRequired,
  }),
};

export default OfferDetails;
