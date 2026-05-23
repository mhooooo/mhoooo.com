const possibilities = [
  {
    title: "Customer Memory",
    description:
      "เก็บคำถามซ้ำ objection, product demand, lost lead และ follow-up ไว้ให้ทีมกลับมาใช้ได้",
  },
  {
    title: "Sales Signals",
    description:
      "เห็น pattern ที่เกิดซ้ำ เช่น สินค้าที่คนถามบ่อย lead ที่ร้อน หรือจุดที่ลูกค้ามักลังเล",
  },
  {
    title: "Approval Flow",
    description:
      "แยกเรื่องที่ AI ตอบเองได้ออกจากเรื่องที่ต้องให้เจ้าของหรือทีมอนุมัติก่อน",
  },
  {
    title: "Multi-channel Support",
    description:
      "เชื่อม LINE, Facebook, Instagram, website หรือ form เข้ากับ memory และ workflow เดียวกัน",
  },
  {
    title: "Operations Dashboard",
    description:
      "รวมงานที่ต้องตาม งานที่ติดขัด และ decision ที่รออยู่ให้เจ้าของเห็นง่ายขึ้น",
  },
  {
    title: "Content Studio",
    description:
      "เปลี่ยนคำถามลูกค้าเป็น FAQ, broadcast idea, script, demo, sales page หรือ campaign",
  },
  {
    title: "BI Reports",
    description:
      "สร้าง report จากงานจริง เช่น response gaps, conversion signals, bottlenecks และ missed revenue",
  },
  {
    title: "Training & SOP",
    description:
      "ใช้สิ่งที่ระบบเรียนรู้มาช่วยเขียน SOP, training material และ guideline ให้ทีมทำงานสม่ำเสมอขึ้น",
  },
  {
    title: "Custom Agents",
    description:
      "เมื่อมีงานใหม่ที่ทำซ้ำ มีข้อมูล และมี decision ชัดเจน ก็สามารถสร้าง agent เฉพาะทางเพิ่มได้",
  },
];

export function WhyMhoooo() {
  return (
    <section id="why-mhoooo" className="bg-paper py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow text-harbor">Second Brain possibilities</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Second Brain ทำให้ระบบต่อยอดง่ายขึ้น
            </h2>
          </div>
          <p className="text-lg leading-8 text-ink/66">
            เมื่อ product ใหม่ใช้ memory base เดียวกัน ข้อมูลจากงานหนึ่งจะกลายเป็น
            วัตถุดิบให้อีกงานหนึ่ง ความเป็นไปได้จึงไม่ได้ถูกจำกัดเป็นแพ็กตายตัว
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
            เริ่มจากระบบเดียว แต่ไม่จำเป็นต้องจบที่ระบบเดียว
          </p>
          <p className="mt-5 max-w-3xl leading-7 text-porcelain/68">
            เมื่องานแรกใช้งานได้จริง คุณจะเห็นคำถามต่อไปเอง: ช่องทางไหนควรเชื่อมเพิ่ม
            report ไหนควร automate, content ไหนควรสร้าง และ agent ไหนควรช่วยทีมต่อ
            นี่คือเหตุผลที่เราใส่ Second Brain ไว้ในทุกระบบตั้งแต่แรก
          </p>
        </div>
      </div>
    </section>
  );
}
