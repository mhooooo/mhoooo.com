const possibilities = [
  {
    title: "Reply",
    description:
      "ตอบลูกค้าเร็วขึ้นจากข้อมูลที่อนุมัติแล้ว ไม่ว่าจะอยู่ใน LINE, Facebook, web หรือ channel ใหม่",
  },
  {
    title: "Remember",
    description:
      "เก็บคำถามซ้ำ objection, product demand, lost lead, follow-up และการตัดสินใจไว้เป็น business memory",
  },
  {
    title: "Decide",
    description:
      "ให้เจ้าของหรือทีมอนุมัติเรื่องสำคัญจาก context ที่ครบ ไม่ต้องไล่เปิดทุกแชทเอง",
  },
  {
    title: "Sense Demand",
    description:
      "เห็นสัญญาณ demand, stock pressure, repeated objections และ lead ที่กำลังร้อนจากข้อมูลจริง",
  },
  {
    title: "Run Channels",
    description:
      "ต่อหลายช่องทางเข้ากับ memory และ approval flow เดียวกัน โดยไม่แยกสมองเป็นคนละระบบ",
  },
  {
    title: "Create",
    description:
      "เปลี่ยนคำถามลูกค้าเป็น FAQ, broadcast idea, script, demo, sales page, campaign หรือ training material",
  },
  {
    title: "Measure",
    description:
      "สร้าง dashboard และ BI จากงานจริง: response gaps, conversion signals, operations bottlenecks และ missed revenue",
  },
  {
    title: "Build Custom Domains",
    description:
      "เพิ่ม agent เฉพาะทางสำหรับ sales, admin, inventory, content, reporting, training หรือ workflow แปลก ๆ ของธุรกิจ",
  },
  {
    title: "Whatever Comes Next",
    description:
      "ถ้ามีงานใหม่ที่ทำซ้ำ มีข้อมูล มี decision และมีคนต้องรับผิดชอบ มันต่อเข้ากับ Second Brain ได้",
  },
];

export function WhyMhoooo() {
  return (
    <section id="why-mhoooo" className="bg-paper py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow text-harbor">Second Brain expansion map</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              ไม่ใช่ 7 level แล้วจบ เป็นทางเปิดปลาย
            </h2>
          </div>
          <p className="text-lg leading-8 text-ink/66">
            แต่ละ product เป็นเหมือน seed ที่ปลูกลงบน Second Brain เดิม ยิ่งธุรกิจ
            ใช้ระบบมากขึ้น ยิ่งรู้ว่าควรต่อ domain, channel หรือ custom feature
            อะไรต่อ
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {possibilities.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-lg border border-line bg-porcelain p-6">
              <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-rust" />
              <div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-ink/66">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-ink p-6 text-porcelain md:p-8">
          <p className="max-w-3xl text-2xl font-black leading-snug">
            ทุก product มี Second Brain อยู่ข้างใน ตั้งแต่แพ็กแรก
          </p>
          <p className="mt-5 max-w-3xl leading-7 text-porcelain/68">
            แพ็กแรกอาจเป็น LINE chat system, lead responder, dashboard หรือ
            content studio ก็ได้ สิ่งที่ขายจริงคือ foundation ที่ทำให้ business
            upgrade ต่อได้เรื่อย ๆ โดยไม่ต้องเริ่มจากศูนย์
          </p>
        </div>
      </div>
    </section>
  );
}
