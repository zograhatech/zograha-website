import { api } from "@/lib/zograha-api";

export default async function TestApiPage() {
  let response;
  let errorMessage: string | null = null;

  try {
    response = await api.services.list();
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : "Unknown error";
  }

  if (errorMessage) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>Backend Connection Failed ❌</h1>

        <pre>{errorMessage}</pre>
      </main>
    );
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Backend Connection Test 🚀</h1>

      <pre>{JSON.stringify(response, null, 2)}</pre>
    </main>
  );
}
