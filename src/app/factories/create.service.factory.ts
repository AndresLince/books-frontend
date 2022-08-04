import { CreateServiceType } from "../models/app-enums.model";
import { CreateReadedBooksService } from "../services/create-services/create-readed-books.service";

export let createServiceFactory = (
    serviceKey: string
) => {
    let service
    switch (serviceKey) {
        case CreateServiceType.ReadedBooks:
            service = CreateReadedBooksService
            break;
        default:
            service = CreateReadedBooksService
            break;
    }
    return service
};

