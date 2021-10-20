export default async function fetchGraphQL<T>(
    query: string,
    preview: boolean = false
  ): Promise<T> {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master';
  
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`;
    const bearerToken = preview
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
      : process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;
  
    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    };
  
    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json()
      );
      return data;
    } catch (error) {
      throw new Error('Could not fetch data from Contentful');
    }
  }