import LenisProvider from "@/components/layout/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsAppButton } from "@/components/ui/FloatingWhatsAppButton";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisProvider>
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        {children}
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </LenisProvider>
  );
}
