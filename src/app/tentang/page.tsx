import VisiMisiSection from "@/components/pages/tentang/VisiMisiSection";
import TentangSection from "@/components/pages/tentang/TentangSection";
import SejarahSection from "@/components/pages/tentang/SejarahSection";
import SambutanSection from "@/components/pages/tentang/SambutanSection";
import LegalitasSection from "@/components/pages/tentang/LegalitasSection";

export default function TentangPage() {
  return (
    <>
      <div className="pt-16 md:pt-20">
        <TentangSection />
        <VisiMisiSection />
        <SejarahSection />
        <SambutanSection/>
        <LegalitasSection/>
      </div>
    </>
  );
}