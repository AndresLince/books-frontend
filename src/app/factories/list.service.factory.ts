import { SearchBooksListService } from "../services/list-services/search-books-list.service";
import { ListType } from "../models/app-enums.model";

export let listServiceFactory = (
    serviceKey: string
) => {
    let service
    switch (serviceKey) {
        case ListType.SearchBooks:
            service = SearchBooksListService
            break;
        default:
            service = SearchBooksListService
            break;
    }
    return service
};

