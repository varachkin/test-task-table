export interface ITableRowData {
    id: number,
    name: string,
    color: string,
    year: number,
    pantone_value: string,
}

export interface IFetchData {
    data: ITableRowData[],
    page: number,
    per_page: number,
    total: number,
    pages: number,
    support: {
        url: string,
        text: string
    }
}

export interface IGlobalState {
    page: number,
    total_pages: number,
    per_page: number,
    isLoading: boolean,
    isModalOpen: boolean,
    modalDescription:{
        id: number,
        name: string,
        year: number,
        color: string,
        pantone_value: string,
    },
    error: string,
    searchRequest: string,
    data: ITableRowData[],
}