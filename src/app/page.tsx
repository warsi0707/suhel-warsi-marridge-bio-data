"use client";

export default function Home() {
  const personal = [
    { label: "Date of Birth", value: "18 October 1998" },
    { label: "Place of Birth", value: "Deoria, Uttar Pradesh" },
    { label: "Height", value: `5' 5" (165 cm)` },
    { label: "Religion", value: "Islam" },
    { label: "Caste", value: "Shaikh" },
    { label: "Nationality", value: "Indian" },
  ];

  const professional = [
    { label: "Occupation", value: "Mechanical Designer Engineer" },
    {
      label: "Company",
      value: "Jacobs India Solution Pvt. Ltd., Mumbai",
    },
  ];

  const family = [
    { label: "Father", value: "Late Gulam Gaush Shaikh" },
    { label: "Mother", value: "Jannatun Nisha" },
    { label: "Brothers", value: "1" },
    { label: "Sisters", value: "1 (Married)" },
    { label: "Uncle", value: "Gulam Sarvar Shaikh" },
    { label: "Cousins", value: "1 Brother, 1 Sister" },
  ];

  const contact = [
    {
      label: "Contact No.",
      value: "+91 97213 84792 (Uncle — Gulam Sarvar Shaikh)",
    },
    {
      label: "Address",
      value:
        "Village: Bharawalia, Post: Barpar, District: Deoria, Uttar Pradesh — 274201",
    },
  ];

  return (
    <main className="min-h-screen bg-[#e9e4d8] flex justify-center py-4 sm:py-6 md:py-8 px-3 sm:px-4 print:bg-white print:p-0">
      <div className="w-full max-w-[794px] min-h-[1123px] bg-[#fffdf7] border-4 sm:border-[6px] md:border-[10px] border-[#0b3d2e] relative overflow-hidden shadow-2xl print:shadow-none print:border-[8px] print:w-full print:min-h-screen font-serif flex flex-col">
        {/* Top Band */}
        <div className="bg-[#0b3d2e] text-[#f5e6b8] text-center px-3 sm:px-4 md:px-5 pt-5 sm:pt-6 pb-3 sm:pb-4">
          <h1 className="text-lg sm:text-xl md:text-[26px] tracking-[2px] sm:tracking-[3px] uppercase mb-1 text-white font-normal">
            Marriage Biodata
          </h1>
          <div className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] uppercase text-[#f5e6b8]">
            In the Name of Allah, The Most Gracious, The Most Merciful
          </div>
        </div>

        {/* Gold Striped Divider */}
        <div
          className="h-1 sm:h-1.5 flex-shrink-0"
          style={{
            background:
              "repeating-linear-gradient(90deg, #c9a227 0 14px, #0b3d2e 14px 28px)",
          }}
        />

        {/* Name */}
        <div className="text-center mt-3 sm:mt-4 mb-1 sm:mb-2 px-3">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] text-[#0b3d2e] tracking-[1.5px] sm:tracking-[2px] font-semibold m-0 break-words">
            SUHEL WARSI
          </h2>
        </div>

        {/* Sections */}
        <div className="flex-1 pb-16 sm:pb-20 md:pb-24">
          <Section title="Personal Details" items={personal} />
          <Section
            title="Education"
            items={[
              {
                label: "Qualification",
                value: "Diploma in Mechanical Engineering",
              },
            ]}
            single
          />
          <Section title="Professional Details" items={professional} />
          <Section title="Family Background" items={family} />
          <Section title="Contact Information" items={contact} single />
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0b3d2e] h-12 sm:h-16 md:h-20" />
      </div>
    </main>
  );
}

type InfoItem = { label: string; value: string };

function Section({
  title,
  items,
  single = false,
}: {
  title: string;
  items: InfoItem[];
  single?: boolean;
}) {
  return (
    <div className="mx-3 sm:mx-6 md:mx-[34px] mt-3 sm:mt-4">
      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 text-xs sm:text-sm md:text-[15px] text-[#0b3d2e] uppercase tracking-[1px] sm:tracking-[1.5px] border-b-2 border-[#c9a227] pb-1 mb-2 sm:mb-2.5 font-bold">
        <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-[26px] md:h-[26px] bg-[#0b3d2e] text-[#f5e6b8] rounded-full flex items-center justify-center text-[10px] sm:text-xs md:text-[13px] flex-shrink-0">
          ✦
        </span>
        <span className="break-words">{title}</span>
      </div>
      <div
        className={`grid gap-x-2 sm:gap-x-3 md:gap-x-[18px] gap-y-1.5 sm:gap-y-2 ${
          single ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col sm:flex-row text-[11px] sm:text-xs md:text-[13px] px-2 sm:px-2.5 py-1.5 bg-[#fbf8ef] border-l-[3px] border-[#c9a227] rounded"
          >
            <span className="font-bold text-[#0b3d2e] sm:min-w-[90px] md:min-w-[105px] flex-shrink-0">
              {item.label}
            </span>
            <span className="text-[#333] break-words">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}