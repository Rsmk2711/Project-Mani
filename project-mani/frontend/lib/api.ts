const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export interface ManiResponse {
  success: boolean;
  intent: string;
  model: string;
  response: { generated_text: string }[];
  error?: string;
}

export async function queryMani(query: string): Promise<ManiResponse> {
  const res = await fetch(`${API_URL}/api/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Something went wrong.");
  }

  return res.json();
}
