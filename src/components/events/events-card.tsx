import styles from "./events.module.css";
import {PlannedEvent} from "../../types";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import {IoIosArrowForward} from "react-icons/io";
import {IoIosArrowBack} from "react-icons/io";
import {useMemo} from "react";
import {useNavigate} from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react';
import localizeEvent from "../../lib/localizeEvent";

const MAX_INLINE_LENGTH = 450;
const SEPARATE_PAGE_THRESHOLD = 500;

export default function EventsCard({event, lang}: {
    event: PlannedEvent,
    lang: string
}) {
    const navigate = useNavigate();

    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true,
        containScroll: 'trimSnaps',
    });

    const {title, text} = useMemo(
        () => localizeEvent(event, lang),
        [event, lang]
    );

    const date = useMemo(
        () => new Date(event.date).toLocaleDateString("sk"),
        [event.date]
    );

    const separateText = text.length > SEPARATE_PAGE_THRESHOLD;

    const textSliced = separateText
        ? text.slice(0, MAX_INLINE_LENGTH).replace(/\s+\S*$/, '') + "…"
        : text;

    return (
        <div>
            <div className={styles.gallery}>
                {emblaApi?.canScrollNext && (
                    <IoIosArrowBack onClick={() => emblaApi?.scrollPrev()}/>
                )}

                <div className={styles.carousel} ref={emblaRef}>
                    <div className={styles.wrapper}>
                        {event.images.map((img) => {
                            return (
                                <img key={img}
                                     src={img}
                                     alt={title}
                                     loading={"lazy"}
                                     className={styles.image}
                                />
                            );
                        })}
                    </div>
                </div>

                {emblaApi?.canScrollNext && (
                    <IoIosArrowForward onClick={() => emblaApi?.scrollNext()}/>
                )}
            </div>

            <div className={styles.textContent}>
                <h2 className={clsx(separateText && styles.hoverEffect)}
                    onClick={() => navigate(`/event/${event.id}`)}>
                    {title}
                </h2>
                <p className={styles.date}>
                    {date}
                </p>
                <p className={styles.text}>
                    {textSliced}
                </p>
                {separateText && <ReadMoreBtn id={event.id}/>}
            </div>
        </div>
    );
}

const ReadMoreBtn = ({id}: {
    id: string
}) => {
    const {t} = useTranslation("events");
    const navigate = useNavigate();

    const redirectHandler = () => {
        navigate(`/event/${id}`);
    }

    return (
        <button className={styles.readMoreButton}
                onClick={redirectHandler}>
            {t("readMoreBtn")}
        </button>
    );
}