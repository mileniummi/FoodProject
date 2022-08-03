import React from "react";
import styles from "./index.module.css";
import offers from "@/temporaryData/Offers";
import OfferCard from "@/components/UI/OfferCard";

const BestOffers = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Best offers</h4>
      <div className={styles.offersContainer}>
        {offers.map((offer) => (
          <OfferCard size="md" offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default BestOffers;
