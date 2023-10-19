export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://med-sphere-server.vercel.app/api/v1"
  );
};
