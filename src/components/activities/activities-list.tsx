import styles from "./activities.module.css";
import ActivityCard from "./activity-card";
import {Activity} from "../../types";
import {useTranslation} from "react-i18next";
import {useCallback} from "react";

export default function ActivitiesList({events}: {
    events: Activity[]
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
                <ActivityCard key={event.id}
                              event={event}
                              lang={lang}
                />
            ))}
        </div>
    );
}