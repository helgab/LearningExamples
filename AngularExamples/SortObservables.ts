// Sort observable
class SortObservable {
    documentService: any;

    documents$ = this.documentService.getDocuments({}).map(data => data.sort(this.sortByDate));

    sortByDate(a, b) {
       if (a.createdAt < b.createdAt) {
           return 1;
       } else if (a.createdAt > b.createdAt) {
           return -1;
       } else {
           return 0;
       }
    }
}
