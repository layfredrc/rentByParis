export async function loadRents() {
  const qs = require("qs");
  const query = qs.stringify(
    {
      populate: "*",
      filters: {
        forRent: {
          $eq: true,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/rents?${query}`
  );
  const data = await res.json();

  return data ?? null;
}
