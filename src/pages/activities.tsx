import styles from "./pages.module.css";
import {useQuery} from "@tanstack/react-query";
import {getActivities} from "../api/activitiesData";
import {Activity} from "../types";
import {useTranslation} from "react-i18next";
import ActivitiesList from "../components/activities/activities-list";

export default function Activities() {
    const {data: events, isLoading, isError} = useQuery<Activity[]>({
        queryKey: ["activities"],
        queryFn: getActivities,
        staleTime: 1000 * 60 * 5,
    });
    const {t} = useTranslation(["activities"]);

    if (isLoading) return <p>Loading events...</p>;
    if (isError) return <p>Failed to load events.</p>;

    return (
        <div>
            <h1 className={styles.pageTitle}>
                {t("pageTitle")}
            </h1>
            {events && <ActivitiesList events={events}/>}
        </div>
    );
}