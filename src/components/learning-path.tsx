const learningPaths = [
  {
    title: "Learn it yourself",
    price: "lowest cost",
    description:
      "คอร์สสอนคิดแบบ Second Brain, map workflow, เขียน prompt, วาง memory และใช้เครื่องมือที่ทำเองได้",
  },
  {
    title: "Template kit",
    price: "faster start",
    description:
      "ได้ starter templates สำหรับ personal memory, project tracker, content system หรือ business workflow",
  },
  {
    title: "Guided setup",
    price: "done with you",
    description:
      "เรียนไปพร้อมกับติดตั้งระบบจริงของตัวเอง มี review, debugging และคำแนะนำเรื่อง structure",
  },
  {
    title: "Custom build",
    price: "done for you",
    description:
      "ให้ mhoooo ออกแบบ ติดตั้ง เชื่อมต่อ และดูแลระบบเต็มรูปแบบสำหรับงานที่ซับซ้อนกว่า",
  },
];

export function LearningPath() {
  return (
    <section id="learn" className="soft-grid bg-[#dfe9d8] py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="eyebrow text-work-green">Learn or hire</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              ถ้าอยากประหยัด ก็เรียนทำเองได้
            </h2>
          </div>
          <p className="text-lg leading-8 text-ink/68">
            การสอนคือส่วนหนึ่งของความน่าเชื่อถือ ถ้า workflow ยังเล็ก คุณไม่จำเป็นต้องจ้าง custom build ทันที
            เรียนหลักคิดก่อน ใช้ template ก่อน แล้วค่อยอัปเกรดเมื่อระบบเริ่มสำคัญกับงานจริง
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {learningPaths.map((path) => (
            <article key={path.title} className="rounded-lg bg-porcelain p-6">
              <p className="font-mono text-xs font-black uppercase text-rust">
                {path.price}
              </p>
              <h3 className="mt-6 text-xl font-black">{path.title}</h3>
              <p className="mt-3 leading-7 text-ink/66">{path.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-ink p-6 text-porcelain md:p-8">
          <p className="max-w-3xl text-2xl font-black leading-snug">
            เป้าหมายไม่ใช่ให้ทุกคนต้องซื้อ custom system
          </p>
          <p className="mt-5 max-w-3xl leading-7 text-porcelain/68">
            เป้าหมายคือให้คนเข้าใจว่า Second Brain ใช้กับงานจริงได้อย่างไร
            ใครอยากทำเองก็มีทางเรียน ใครอยากเร็วหรือซับซ้อนขึ้นก็ให้เราช่วยสร้างให้
          </p>
        </div>
      </div>
    </section>
  );
}
