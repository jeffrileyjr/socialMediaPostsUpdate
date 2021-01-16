export interface Post {
    title: string;
    content: string;
    upvote?: number;
    downvote?: number;
    // the question means it is not required
}