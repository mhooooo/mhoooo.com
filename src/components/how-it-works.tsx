const steps = [
  {
    number: "01",
    title: "เลือก workflow แรก",
    description:
      "เริ่มจากงานที่เสียเวลาหรือทำให้เสียลูกค้า เช่น ตอบแชท เก็บ lead เช็ก stock ทำ report หรือ follow-up",
  },
  {
    number: "02",
    title: "ทำ demo ให้เห็นก่อน",
    description:
      "สร้าง flow ที่ใช้งานได้จริงและอัดหน้าจอให้ดูว่า AI ตัดสินใจตรงไหน คนต้องอนุมัติตรงไหน",
  },
  {
    number: "03",
    title: "ติดตั้ง แล้วค่อยขยาย",
    description:
      "ถ้าเดโมคุ้ม เราเชื่อมบัญชีจริง ใส่ guardrail เทรนคนใช้ เก็บ memory และเพิ่ม product ใหม่ตามงานจริง",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="soft-grid bg-[#dfe9d8] py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="eyebrow text-work-green">Method</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              เริ่มเล็ก แต่ต้องวางฐานให้โตได้
            </h2>
          </div>
          <p className="text-lg leading-8 text-ink/68">
            เป้าหมายไม่ใช่ทำระบบใหญ่ตั้งแต่วันแรก เป้าหมายคือ workflow แรกที่
            พิสูจน์ได้ แล้วต่อให้กลายเป็น Second Brain ของธุรกิจ
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative rounded-lg bg-porcelain p-6">
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute left-full top-10 hidden h-px w-4 bg-ink/25 md:block" />
              )}
              <div className="font-mono text-sm font-black text-rust">
                {step.number}
              </div>
              <h3 className="mt-8 text-2xl font-black">{step.title}</h3>
              <p className="mt-3 leading-7 text-ink/66">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
