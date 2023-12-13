'use client'
import EmployeeContent from "@/components/EmployeeContent";
import Modal from "@/components/Modal";

const ImageDetailPage = () => {
  return (
    <Modal>
      <div className="flex justify-center items-center bg-white rounded-md p-32 shadow-md">
        <EmployeeContent />
      </div>
    </Modal>
  );
};

export default ImageDetailPage;