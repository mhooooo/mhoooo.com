const services = [
  {
    label: "01",
    title: "Second Brain in every product",
    description:
      "ไม่ว่าจะเริ่มจาก chat, lead, content, reporting หรือ operations ระบบจะเก็บ memory ที่เอาไปใช้ต่อกับ feature ใหม่ได้",
    proof: "Core promise",
  },
  {
    label: "02",
    title: "Productized workflows",
    description:
      "เริ่มจากงานที่เสียเวลาหรือทำเงินหลุดจริง ทำ demo ให้เห็นก่อน แล้วค่อยติดตั้งเป็น product ที่ดูแลต่อได้",
    proof: "Demo first",
  },
  {
    label: "03",
    title: "LINE chat system, but different",
    description:
      "ไม่ใช่ bot ตอบ FAQ เฉย ๆ แต่มี Support Agent คุยกับลูกค้า และ Operator Assistant ช่วยทีมเช็กข้อมูล ขออนุมัติ และบันทึก memory",
    proof: "First product",
  },
  {
    label: "04",
    title: "Truthful business signals",
    description:
      "ถ้าจะบอกว่า “มี 3 คนถามสินค้านี้ เหลือ 1 ชิ้น” ต้องมาจากข้อมูลจริง เช่น chat demand, stock, reservation และ approval log",
    proof: "Trust layer",
  },
  {
    label: "05",
    title: "Endless expansion",
    description:
      "เพิ่ม domain, channel, social media, studio, dashboard, BI หรือ custom agent ใหม่ได้ตามปัญหาที่ธุรกิจเจอ ไม่มีเพดานตายตัว",
    proof: "No ceiling",
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
              ไม่ได้ขายแค่ chatbot เราขาย product ที่จำงานของธุรกิจได้
            </h2>
          </div>
          <p className="text-lg leading-8 text-ink/66">
            LINE เป็น product แรกเพราะแชทคือจุดที่ลูกค้า เงิน และข้อมูลไหลผ่าน
            แต่ positioning จริงคือ Second Brain foundation: สร้างระบบหนึ่งแล้ว
            ต่อระบบถัดไปจากความรู้เดิม ไม่ใช่เริ่มใหม่ทุก project
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
