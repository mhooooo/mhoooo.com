const steps = [
  {
    number: "01",
    title: "เลือกงานที่เจ็บจริง",
    description:
      "เริ่มจากงานที่เสียเวลา ทำให้ความรู้หาย หรือทำให้ทีมตัดสินใจช้า เช่น ตอบแชท สรุปประชุม ทำ report training หรือ follow-up",
  },
  {
    number: "02",
    title: "ทำ prototype ให้เห็นภาพ",
    description:
      "สร้าง flow ที่พอใช้งานได้จริงและอัดหน้าจอให้ดูว่า AI ช่วยตรงไหน คนต้องอนุมัติตรงไหน และผลลัพธ์หน้าตาเป็นอย่างไร",
  },
  {
    number: "03",
    title: "ติดตั้งพร้อม memory",
    description:
      "ถ้าเดโมคุ้ม เราเชื่อมบัญชีจริง ใส่ guardrail เทรนคนใช้ และเก็บ memory เพื่อให้ระบบถัดไปต่อยอดจากของเดิม",
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
              วิธีเริ่มแบบไม่เสี่ยงเกินไป
            </h2>
          </div>
          <p className="text-lg leading-8 text-ink/68">
            เราไม่เริ่มจาก platform ใหญ่ที่ยังไม่รู้ว่าจะใช้จริงไหม เราเริ่มจากงานเดียว
            ทำให้เห็นผล แล้วค่อยขยายจากข้อมูลที่ระบบเก็บได้
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
