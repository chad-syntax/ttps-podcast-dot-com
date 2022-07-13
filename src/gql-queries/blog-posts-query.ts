import { BLOG_BRANCH } from '../../app.config';

export const BLOG_POSTS_QUERY = `
query BlogPosts($postsPath: String!) { 
  repository(name: "ttps-cms", owner: "chad-syntax") {
    object(expression: $postsPath) {
      ... on Tree {
				entries {
          name
          object {
            ... on Blob {
              text
            }
          }
        }
      }
    }
  }
}
`;

export const BLOG_POST_QUERY = `
query BlogPost($postPath: String!) {
  repository(name: "ttps-cms", owner: "chad-syntax") {
    object(expression: $postPath) {
      ... on Blob {
        text
      }
    }
  }
}
`;
