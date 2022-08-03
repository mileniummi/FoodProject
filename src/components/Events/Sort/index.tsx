import React from "react";
import styles from "./index.module.css";
import { AiFillStar, GiPriceTag, GoCalendar } from "react-icons/all";
import { EventSortAlgorithm } from "@/components/Events/EventList";
import classNames from "classnames";

interface EventSortProps {
  algorithm: EventSortAlgorithm;
  changeAlgorithm: (algorithm: EventSortAlgorithm) => void;
}

const EventSort: React.FC<EventSortProps> = ({
  algorithm,
  changeAlgorithm,
}) => {
  return (
    <>
      <h2 className={styles.title}>Events</h2>
      <div className={styles.container}>
        <p>Sort</p>
        <button
          value="price"
          onClick={() => changeAlgorithm("price")}
          className={classNames(
            styles.button,
            algorithm === "price" && styles.active
          )}
        >
          <GiPriceTag /> <p>By price</p>
        </button>
        <button
          value="rating"
          onClick={() => changeAlgorithm("rating")}
          className={classNames(
            styles.button,
            algorithm === "rating" && styles.active
          )}
        >
          <AiFillStar /> <p>By rating</p>
        </button>
        <button
          value="date"
          onClick={() => changeAlgorithm("date")}
          className={classNames(
            styles.button,
            algorithm === "date" && styles.active
          )}
        >
          <GoCalendar />
          <p>By date</p>
        </button>
      </div>
    </>
  );
};

export default EventSort;
