interface CharacterList {};
interface ComicList {};
interface CreatorList {};
interface EventList {};
interface StoryList {};
interface SeriesSummary {};
interface Image {};
interface Url {};

export interface Series {
    id?: number                 // The unique ID of the series resource.
    title?: string              // The canonical title of the series.
    description?: string        // A description of the series.
    resourceURI?: string        // The canonical URL identifier for this resource.
    urls?: Url[]                // A set of public web site URLs for the resource.
    startYear?: number          // The first year of publication for the series
    endYear?: number            // The last year of publication for the series (2099 for ongoing series).
    rating?: string             // The age-appropriateness rating for the series.
    modified?: Date             // The date the resource was most recently modified.
    thumbnail?: Image           // The representative image for this series.
    comics?: ComicList          // A resource list containing comics in this series.
    stories?: StoryList         // A resource list containing stories which occur in comics in this series.
    events?: EventList          // A resource list containing events which take place in comics in this series.
    characters?: CharacterList  // A resource list containing characters which appear in comics in this series.
    creators?: CreatorList      // A resource list of creators whose work appears in comics in this series.
    next?: SeriesSummary        // A summary representation of the series which follows this series.
    previous?: SeriesSummary    // A summary representation of the series which preceded this series.
};

// Url {
//     type (string, optional): A text identifier for the URL.,
//         url (string, optional): A full URL (including scheme, domain, and path).
// }
// Image {
//     path (string, optional): The directory path of to the image.,
//         extension (string, optional): The file extension for the image.
// }
// ComicList {
//     available (int, optional): The number of total available issues in this list. Will always be greater than or equal to the "returned" value.,
//         returned (int, optional): The number of issues returned in this collection (up to 20).,
//     collectionURI (string, optional): The path to the full list of issues in this collection.,
//         items (Array[ComicSummary], optional): The list of returned issues in this collection.
// }
// ComicSummary {
//     resourceURI (string, optional): The path to the individual comic resource.,
//         name (string, optional): The canonical name of the comic.
// }
// StoryList {
//     available (int, optional): The number of total available stories in this list. Will always be greater than or equal to the "returned" value.,
//         returned (int, optional): The number of stories returned in this collection (up to 20).,
//     collectionURI (string, optional): The path to the full list of stories in this collection.,
//         items (Array[StorySummary], optional): The list of returned stories in this collection.
// }
// StorySummary {
//     resourceURI (string, optional): The path to the individual story resource.,
//         name (string, optional): The canonical name of the story.,
//         type (string, optional): The type of the story (interior or cover).
// }
// EventList {
//     available (int, optional): The number of total available events in this list. Will always be greater than or equal to the "returned" value.,
//         returned (int, optional): The number of events returned in this collection (up to 20).,
//     collectionURI (string, optional): The path to the full list of events in this collection.,
//         items (Array[EventSummary], optional): The list of returned events in this collection.
// }
// EventSummary {
//     resourceURI (string, optional): The path to the individual event resource.,
//         name (string, optional): The name of the event.
// }
// CharacterList {
//     available (int, optional): The number of total available characters in this list. Will always be greater than or equal to the "returned" value.,
//         returned (int, optional): The number of characters returned in this collection (up to 20).,
//     collectionURI (string, optional): The path to the full list of characters in this collection.,
//         items (Array[CharacterSummary], optional): The list of returned characters in this collection.
// }
// CharacterSummary {
//     resourceURI (string, optional): The path to the individual character resource.,
//         name (string, optional): The full name of the character.,
//         role (string, optional): The role of the creator in the parent entity.
// }
// CreatorList {
//     available (int, optional): The number of total available creators in this list. Will always be greater than or equal to the "returned" value.,
//         returned (int, optional): The number of creators returned in this collection (up to 20).,
//     collectionURI (string, optional): The path to the full list of creators in this collection.,
//         items (Array[CreatorSummary], optional): The list of returned creators in this collection.
// }
// CreatorSummary {
//     resourceURI (string, optional): The path to the individual creator resource.,
//         name (string, optional): The full name of the creator.,
//         role (string, optional): The role of the creator in the parent entity.
// }
// SeriesSummary {
//     resourceURI (string, optional): The path to the individual series resource.,
//         name (string, optional): The canonical name of the series.
// }
