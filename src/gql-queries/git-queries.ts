export const GIT_FILES_QUERY = `
query GitFiles($expression: String!) { 
  repository(name: "ttps-cms", owner: "chad-syntax") {
    object(expression: $expression) {
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

export const GIT_FILE_QUERY = `
query GitFile($expression: String!) {
  repository(name: "ttps-cms", owner: "chad-syntax") {
    object(expression: $expression) {
      ... on Blob {
        text
      }
    }
  }
}
`;
