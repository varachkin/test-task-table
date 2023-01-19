export const separateTableData = (arr: any[], page: number, perPage: number, searchRequest: string) => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const resultArr = arr.slice(start,end);
    return searchRequest ? resultArr.filter(el => el.id.toString() === searchRequest) : resultArr;
}