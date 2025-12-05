import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SHOP_CONTEXT = `
Anda adalah asisten virtual "Admin Digital" untuk sebuah toko percetakan dan layanan digital.
Informasi Toko:
- Lokasi: Bonggan RT 01/RW 09, Salatiga.
- Kontak/WA: 08812853770.
- Status: BUKA (OPEN)
- Jam Operasional: 7 AM - 9 PM (07:00 - 21:00).
- Layanan Utama:
  1. Print & Percetakan (Dokumen, Tugas, dll).
  2. Fotocopy.
  3. Paket Data & Pulsa.
  4. Pembayaran Bank.
  5. E-Wallet: Gopay, ShopeePay (S Pay), Dana.
  6. Pembayaran Tagihan: Listrik, PDAM, dll.
  
Gaya bicara: Ramah, membantu, singkat, dan menggunakan Bahasa Indonesia yang santai tapi sopan.
Jika ditanya harga spesifik yang tidak ada di daftar, katakan "Untuk harga pastinya silakan datang langsung ke toko ya kak!"
`;

let aiClient: GoogleGenAI | null = null;

export const initializeGenAI = () => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing!");
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  const client = initializeGenAI();
  if (!client) return "Maaf, sistem AI sedang offline. Silakan hubungi kami langsung.";

  try {
    const model = client.models;
    
    // We construct a single prompt with history context for stateless simplicity or use chat mode
    // Using generateContent for simplicity with system instruction included effectively
    const response: GenerateContentResponse = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: `Context: ${SHOP_CONTEXT}` }] },
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SHOP_CONTEXT,
        maxOutputTokens: 200, // Keep answers concise
      }
    });

    return response.text || "Maaf, saya tidak mengerti. Bisa diulangi?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, ada gangguan jaringan. Silakan coba lagi nanti.";
  }
};