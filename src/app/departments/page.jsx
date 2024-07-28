import PageHeading from "@/components/common/PageHeading";
import Acupuncture from "@/components/departments/Acupuncture";
import Chiropractic from "@/components/departments/Chiropractic";
import Massage from "@/components/departments/Massage";

const DepartmentsPage = () => {
  return (
    <section>
      <PageHeading title="Departments" />
      <div className="py-12">
        <Chiropractic />
        <Acupuncture />
        <Massage />
      </div>
    </section>
  );
};

export default DepartmentsPage;
