'use client'
import { useParams } from "next/navigation";

const EmployeeContent = () => {
  const { id } = useParams()
  return (
    <article>
      <div>EmployeeContent ID: {id}</div>
    </article>
  );
};

export default EmployeeContent;