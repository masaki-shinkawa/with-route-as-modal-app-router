import EmployeeContent from "@/components/EmployeeContent";
import Link from "next/link";

const ImageDetailPage = async () => {
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center flex-col gap-4">
      <div className="flex justify-center items-center bg-white rounded-md p-32 shadow-md">
        <EmployeeContent />
      </div>
      <Link href="/" className="text-blue-700 underline">To Top</Link>
    </div>
  );
};

export default ImageDetailPage;