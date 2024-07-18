import { fetchGraphQL } from "./fetchGraphQl";

function extractAuthorsEntries(fetchResponse) {
    return fetchResponse?.data?.authorCollection?.items;
}

export async function getAuthors({preview = false}) {
    const list = await fetchGraphQL(
      `
      query {
        authorCollection{
          items{
            __typename
            sys{id}
            firstName
            lastName
            bio
            occupation
            profilePic {
              url
            }
          }
        }
      }
      `,
      preview
    );
    return extractAuthorsEntries(list);
}