export class Blog {

    public author_name: String;
    public author_id: String;
    public title: String;
    public description: String;

    constructor(author_name: String, author_id: String, title: String, description: String) {
        this.author_name = author_name;
        this.description = description;
        this.author_id = author_id;
        this.title = title;
        this.description = description;
    }
}