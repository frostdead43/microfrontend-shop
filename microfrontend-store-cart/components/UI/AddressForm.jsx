"use client";

export default function AddressForm() {
  return (
    <div className="border rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">
        Teslimat Bilgileri
      </h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Ad Soyad"
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Telefon"
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Adres"
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Şehir"
          className="border p-2 rounded"
        />
      </form>
    </div>
  );
}
