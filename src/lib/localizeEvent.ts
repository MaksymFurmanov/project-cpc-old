import {PlannedEvent} from "../types";

const localizeEvent = (event: PlannedEvent, lang: string): {
    title: string,
    text: string
} => {
    let title: string, text: string;
    switch (lang) {
        case "en":
            title = event.titleEN;
            text = event.descriptionEN;
            break;
        case "ua":
            title = event.titleUA;
            text = event.descriptionUA;
            break;
        default:
            title = event.titleSK;
            text = event.descriptionSK;
    }

    return {title, text}
}

export default localizeEvent;