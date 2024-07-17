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
            sys{id}
            firstName
            lastName
            city
          }
        }
      }
      `,
      preview
    );
    return extractAuthorsEntries(list);
}