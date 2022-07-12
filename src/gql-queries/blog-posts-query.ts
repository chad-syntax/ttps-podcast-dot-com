import { BLOG_BRANCH } from '../../app.config';

export const BLOG_POSTS_QUERY = `
query { 
  repository(name: "ttps-cms", owner: "chad-syntax") {
    object(expression: "${BLOG_BRANCH}:content/post/") {
      ... on Tree {
				entries {
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
