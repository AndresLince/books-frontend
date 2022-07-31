import { SearchBooksListService } from "../services/search-books-list.service";
import { ListType } from "../models/app-enums.model";

export let listServiceFactory = (
    ListServiceKey: string
) => {
    let listService
    switch (ListServiceKey) {
        case ListType.SearchBooks:
            listService = SearchBooksListService
            break;
        default:
            listService = SearchBooksListService
            break;
    }
    return listService
};

