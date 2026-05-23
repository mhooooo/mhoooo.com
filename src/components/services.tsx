const services = [
  {
    label: "01",
    title: "Second Brain foundation",
    description:
      "ทุก product เก็บความรู้จากงานจริงไว้เป็นฐานเดียวกัน เช่น คำถามลูกค้า lead ที่หลุด งานที่ต้องตาม และเหตุผลที่ทีมตัดสินใจ",
    proof: "Memory layer",
  },
  {
    label: "02",
    title: "Workflow products",
    description:
      "เราไม่เริ่มจากคำว่า “อยากใช้ AI” แต่เริ่มจาก workflow ที่วัดผลได้ แล้วทำให้เป็นระบบที่ใช้งานซ้ำ ดูแลต่อ และปรับปรุงได้",
    proof: "Practical first",
  },
  {
    label: "03",
    title: "LINE chat system",
    description:
      "ตัวอย่าง product แรกคือระบบแชทที่มีทั้ง Support Agent สำหรับหน้าลูกค้า และ Operator Assistant สำหรับทีมหลังบ้าน",
    proof: "First demo",
  },
  {
    label: "04",
    title: "Proof-based decisions",
    description:
      "คำแนะนำของระบบควรมาจากหลักฐาน เช่น ประวัติแชท stock, reservation, approval log หรือ pattern ที่เกิดซ้ำ ไม่ใช่การเดา",
    proof: "Trust layer",
  },
  {
    label: "05",
    title: "Expandable modules",
    description:
      "เมื่องานแรกเริ่มนิ่ง สามารถต่อ channel, dashboard, content studio, BI หรือ custom agent ใหม่จากฐานความรู้เดิม",
    proof: "Built to grow",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-porcelain py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow text-rust">What we build</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              จาก workflow แรก สู่ระบบที่จำและต่อยอดได้
            </h2>
          </div>
          <p className="text-lg leading-8 text-ink/66">
            วิธีคิดของเราง่ายมาก: เลือกงานที่ทำซ้ำ สร้างระบบให้ช่วยงานนั้นอย่างปลอดภัย
            แล้วเก็บบทเรียนจากการใช้งานไว้ใน Second Brain เพื่อให้ product ถัดไปฉลาดขึ้น
            ตั้งแต่วันแรก
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-line bg-paper p-6 shadow-sm transition-colors hover:border-ink/30"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-sm font-bold text-rust">
                  {service.label}
                </span>
                <span className="rounded-sm border border-ink/10 px-2 py-1 text-xs font-bold text-ink/55">
                  {service.proof}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-black">{service.title}</h3>
              <p className="mt-3 leading-7 text-ink/66">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
