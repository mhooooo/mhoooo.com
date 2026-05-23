const everydayWorkflows = [
  {
    title: "Retail / Commerce",
    description:
      "จำคำถามลูกค้า สัญญาณ demand, stock pressure, follow-up และเหตุผลที่ทีมตอบแบบนั้น",
  },
  {
    title: "Personal Second Brain",
    description:
      "รวม notes, tasks, reminders, documents, ideas, learning, travel plan และ life admin ให้ค้นกลับมาใช้ได้",
  },
  {
    title: "Creator Studio",
    description:
      "เก็บไอเดีย research, hook, script, draft, content calendar และ performance notes ไว้เป็นระบบเดียว",
  },
  {
    title: "Project Memory",
    description:
      "จำ brief, decision, owner, deadline, blocker, meeting notes และสิ่งที่ตกลงกันแล้ว",
  },
  {
    title: "Professional / Student",
    description:
      "จัด research, applications, portfolio, reading notes, interview prep และ learning roadmap",
  },
  {
    title: "Service Business",
    description:
      "เก็บ client context, proposal, invoice follow-up, SOP, delivery checklist และงานหลังบ้าน",
  },
];

export function WorkflowShowcase() {
  return (
    <section id="showcase" className="bg-paper py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="eyebrow text-rust">Everyday workflow showcase</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Second Brain ใช้ได้กับงานที่มีบริบท ไม่ใช่แค่ร้านค้า
            </h2>
          </div>
          <p className="text-lg leading-8 text-ink/66">
            ถ้างานมี input, context, decision, output และบทเรียนที่ควรจำ
            งานนั้นสามารถมี Second Brain ได้ ระบบจะค่อย ๆ เปลี่ยนงานซ้ำให้เป็น
            knowledge base ที่ทีมและ agent ใช้ต่อได้
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {everydayWorkflows.map((workflow) => (
            <article
              key={workflow.title}
              className="rounded-lg border border-line bg-porcelain p-6"
            >
              <div className="h-2 w-2 rounded-full bg-rust" />
              <h3 className="mt-6 text-xl font-black">{workflow.title}</h3>
              <p className="mt-3 leading-7 text-ink/66">
                {workflow.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
