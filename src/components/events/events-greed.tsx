import styles from "./events.module.css";
import EventsCard from "./events-card";
import {PlannedEvent} from "../../types";
import {useTranslation} from "react-i18next";
import {useCallback} from "react";

export default function EventsList({events}: {
    events: PlannedEvent[]
}) {
    const {i18n} = useTranslation();
    const lang = i18n.language;

    const sorted = useCallback(() => {
        return events.sort((a, b) => {
            if (a.date > b.date) return -1;
            if (a.date < b.date) return 1;
            return 0;
        });
    }, [events])();

    return (
        <div className={styles.listContainer}>
            {sorted && sorted.map((event) => (
                <EventsCard key={event.id}
                            event={event}
                            lang={lang}
                />
            ))}
        </div>
    );
}