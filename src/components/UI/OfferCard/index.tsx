import React from "react";
import styles from "./index.module.css";
import { IOffer } from "@/types/offer";
import Stars from "@/components/UI/OfferCard/stars";
import {
  BiDish,
  GiCook,
  IoIosPerson,
  TiLocationOutline,
} from "react-icons/all";

const OfferCard: React.FC<{ offer: IOffer }> = ({ offer }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stars}>
        <Stars filled={offer.stars} />
      </div>
      <div className={styles.media}>
        <img className={styles.image} src={offer.img} alt="offer" />
        <div className={styles.participants}>
          <IoIosPerson color={"white"} size={"1.5em"} />
          <p>
            {offer.currentParticipants}/{offer.totalParticipants}
          </p>
        </div>
      </div>
      <h6 className={styles.title}>{offer.name}</h6>
      <div className={styles.info}>
        <GiCook size={"2em"} color={"var(--gray)"} /> <p>{offer.author}</p>
      </div>
      <div className={styles.info}>
        <TiLocationOutline size={"2em"} color={"var(--gray)"} />
        <p>{offer.locationName}</p>
      </div>
      <div className={styles.commercialInfo}>
        <p className={styles.price}>{offer.price}</p>
        <button className={styles.button}>
          <BiDish color={"white"} size={"2em"} /> Reserve
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
