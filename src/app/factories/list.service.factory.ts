import { SearchBooksListService } from "../services/list-services/search-books-list.service";
import { ListType } from "../models/app-enums.model";
import { ReadedBooksService } from "../services/list-services/readed-books.service";

export let listServiceFactory = (
    serviceKey: string
) => {
    let service
    switch (serviceKey) {
        case ListType.SearchBooks:
            service = SearchBooksListService
            break;
        case ListType.ReadedBooks:
            service = ReadedBooksService
            break;
        default:
            service = SearchBooksListService
            break;
    }
    return service
};

