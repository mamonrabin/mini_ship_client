import Sidebar from "@/src/components/profile-section/Sidebar";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex md:flex-row flex-col gap-8 min-h-screen bg-[#EEEEEE] Container py-6">
      <div className="md:w-80 w-full">
        <Sidebar/>
      </div>

      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
