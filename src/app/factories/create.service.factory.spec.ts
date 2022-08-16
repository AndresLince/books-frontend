import { CreateReadedBooksService } from "../services/create-services/create-readed-books.service"
import { createServiceFactory } from "./create.service.factory"

describe('Create Service Factory', () => {
    it('should return a create readed books service', () => {
        const listService = createServiceFactory('')
        expect(listService).toBe(CreateReadedBooksService)
    })
})
