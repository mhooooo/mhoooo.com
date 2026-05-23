const demos = [
  {
    status: "Recording next",
    title: "Customer Support Agent",
    scenario: "ลูกค้าทักมาถามสินค้า ราคา stock หรือ delivery ใน LINE OA",
    system:
      "ตอบจาก FAQ ที่อนุมัติแล้ว ถามคำถามต่อเพื่อคัดกรอง lead และหยุดรอคนอนุมัติเมื่อเป็นเรื่องราคา ส่วนลด หรือคำมั่นสัญญา",
    evidence: "Front office",
  },
  {
    status: "Operator side",
    title: "Operator Assistant",
    scenario: "ทีมต้องไล่อ่านหลายแชทเพื่อรู้ว่าใครรอตอบ อะไรต้องเช็ก และอะไรต้องตัดสินใจ",
    system:
      "สรุป context, next action, stock risk, approval request และ follow-up ให้ทีมเห็นในมุมเดียว โดยไม่ต้องเปิดทุก conversation เอง",
    evidence: "Back office",
  },
  {
    status: "Trust layer",
    title: "Live sales signals",
    scenario: "ลูกค้า 3 คนถามสินค้าตัวเดียวกัน แต่ stock เหลือ 1 ชิ้น",
    system:
      "ระบบแจ้งทีมว่ามี demand เกิดขึ้น และช่วยร่างข้อความที่ซื่อสัตย์กับข้อมูลจริง เช่น stock, reservation และประวัติคำถาม",
    evidence: "Live facts",
  },
  {
    status: "Product spine",
    title: "Business memory",
    scenario: "คำถามลูกค้า objection และ follow-up กระจายอยู่ในแชท",
    system:
      "ทุก conversation ถูกสรุปเป็น customer memory, FAQ seed, demand signal, task และ product idea ที่เอากลับมาใช้ต่อได้",
    evidence: "Second Brain",
  },
];

export function DemoLibrary() {
  return (
    <section id="demos" className="bg-ink py-20 text-porcelain md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-[#f0bf7a]">Demo library</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              ตัวอย่าง product แรก: ระบบแชทที่มีหลังบ้าน
            </h2>
            <p className="mt-6 text-lg leading-8 text-porcelain/68">
              chatbot ทั่วไปมักหยุดที่การตอบคำถาม แต่ธุรกิจต้องการมากกว่านั้น:
              รู้ว่าลูกค้าคนไหนสำคัญ อะไรต้องขออนุมัติ stock พอไหม และคำถามเหล่านี้
              สอนอะไรให้ธุรกิจ ระบบนี้จึงแยกเป็นสองบทบาทที่ใช้ memory เดียวกัน
            </p>
          </div>

          <div className="grid gap-3">
            {demos.map((demo) => (
              <article
                key={demo.title}
                className="rounded-lg border border-porcelain/12 bg-porcelain/[0.045] p-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-black">{demo.title}</h3>
                  <span className="w-fit rounded-sm border border-porcelain/16 px-2.5 py-1 text-xs font-bold text-[#f0bf7a]">
                    {demo.status}
                  </span>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-xs font-bold text-porcelain/44">
                      Scenario
                    </p>
                    <p className="mt-2 text-sm leading-6 text-porcelain/76">
                      {demo.scenario}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-porcelain/44">
                      System
                    </p>
                    <p className="mt-2 text-sm leading-6 text-porcelain/76">
                      {demo.system}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-porcelain/44">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6 text-porcelain/76">
                      {demo.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
