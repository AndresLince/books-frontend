import { ApiService } from "../services/api.service";
import { ListService } from "../services/list.service";
import { SearchBooksListService } from "../services/search-books-list.service";

let listServiceFactory = (
    apiService: ApiService,
) => {
    return new SearchBooksListService(apiService)
};

export let listServiceProvider = {
    provide: ListService,
    useFactory: listServiceFactory,
    deps: [
      ApiService
    ]
};

