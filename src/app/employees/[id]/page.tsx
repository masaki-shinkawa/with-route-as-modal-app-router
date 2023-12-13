import EmployeeContent from "@/components/EmployeeContent";

const ImageDetailPage = async () => {
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      <div className="flex justify-center items-center bg-white rounded-md p-32 shadow-md">
        <EmployeeContent />
      </div>
    </div>
  );
};

export default ImageDetailPage;