const advancedWorkflows = [
  {
    title: "Harness control room",
    description:
      "ดูงานที่กำลังรัน approval ที่รออยู่ stop-loss gate, run log และสถานะของ agent ในที่เดียว",
  },
  {
    title: "Archon-style agent dispatch",
    description:
      "เปลี่ยน plan เป็นงาน agent ที่แยกไปทำ ตรวจผล เปิด PR และทิ้งหลักฐานการทำงานไว้ให้ review ได้",
  },
  {
    title: "Multi-agent review",
    description:
      "ให้ agent หลายตัวช่วยตรวจ architecture, bug, regression, test gap และ tradeoff ก่อนตัดสินใจ merge",
  },
  {
    title: "Memory + event monitoring",
    description:
      "เก็บ event, session, decision, failure และ follow-up เป็น timeline เพื่อให้ระบบอธิบายตัวเองย้อนหลังได้",
  },
];

export function AdvancedWorkflows() {
  return (
    <section id="advanced" className="bg-ink py-20 text-porcelain md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow text-[#f0bf7a]">Power-user workflows</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              จาก workflow ธรรมดา ไปจนถึง agent operating system
            </h2>
            <p className="mt-6 text-lg leading-8 text-porcelain/68">
              สำหรับคนที่อยากเห็นขีดจำกัดของระบบ mhoooo สามารถโชว์ workflow
              ระดับ control room ได้ด้วย ไม่ใช่แค่ automation ง่าย ๆ แต่รวมถึง
              agent dispatch, approval, monitoring และ memory ระยะยาว
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {advancedWorkflows.map((workflow) => (
              <article
                key={workflow.title}
                className="rounded-lg border border-porcelain/12 bg-porcelain/[0.045] p-5"
              >
                <h3 className="text-xl font-black">{workflow.title}</h3>
                <p className="mt-3 leading-7 text-porcelain/68">
                  {workflow.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
