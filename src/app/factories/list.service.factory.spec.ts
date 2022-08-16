import { SearchBooksListService } from "../services/list-services/search-books-list.service"
import { listServiceFactory } from "./list.service.factory"

describe('List Service Factory', () => {
    it('should return a search books list service', () => {
        const listService = listServiceFactory('')
        expect(listService).toBe(SearchBooksListService)
    })
})
