import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import offers from "@/temporaryData/Offers";
import OfferCard from "@/components/UI/OfferCard";
import EventSort from "@/components/Events/Sort";
import { IEvent } from "@/types/event";
import autoAnimate from "@formkit/auto-animate";

export type EventSortAlgorithm = undefined | "price" | "rating" | "date";

const EventList = () => {
  const [sortAlgorithm, setSortAlgorithm] =
    useState<EventSortAlgorithm>(undefined);
  const [sortedEvents, setSortedEvents] = useState<IEvent[]>([]);
  const eventList = useRef(null);

  const changeEventSortAlgorithm = (algorithm: EventSortAlgorithm) => {
    setSortAlgorithm(algorithm);
  };

  useEffect(() => {
    eventList.current && autoAnimate(eventList.current, { easing: "ease-out" });
  }, [parent]);

  useEffect(() => {
    switch (sortAlgorithm) {
      case "price": {
        setSortedEvents(
          [...offers].sort((a, b) => (a.price > b.price ? 1 : -1))
        );
        break;
      }
      case "rating": {
        setSortedEvents(
          [...offers].sort((a, b) => (a.stars > b.stars ? 1 : -1))
        );
        break;
      }
      case "date": {
        //ToDo sort events by Date
        setSortedEvents(offers);
        break;
      }
      default:
        setSortedEvents(offers);
    }
  }, [sortAlgorithm]);

  return (
    <div className={styles.container}>
      <EventSort
        algorithm={sortAlgorithm}
        changeAlgorithm={changeEventSortAlgorithm}
      />
      <div ref={eventList} className={styles.eventsContainer}>
        {sortedEvents.map((offer, index) => (
          <OfferCard key={index} size="sm" offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
