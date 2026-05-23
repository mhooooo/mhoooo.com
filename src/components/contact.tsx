export function Contact() {
  return (
    <section id="contact" className="bg-ink py-20 text-porcelain md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="eyebrow text-[#f0bf7a]">Start small</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              ส่ง workflow แรกที่อยากให้ AI ช่วย
            </h2>
            <p className="mt-5 text-lg leading-8 text-porcelain/70">
              บอกแค่ว่าลูกค้าทักมาจากไหน ตอนนี้ทีมตอบยังไง ต้องเช็กอะไร
              และเรื่องไหนต้องให้คนอนุมัติ
            </p>
          </div>

          <div className="rounded-lg border border-porcelain/12 bg-porcelain/[0.045] p-6">
            <div className="grid gap-4">
              <div className="rounded-md bg-porcelain p-4 text-ink">
                <p className="text-sm font-black">Example</p>
                <p className="mt-2 leading-7 text-ink/68">
                  &ldquo;ลูกค้าทัก LINE มาถามสินค้า ช่วยถามไซซ์ เช็ก stock
                  สรุปให้ทีม และขออนุมัติเจ้าของก่อนเสนอส่วนลด&rdquo;
                </p>
              </div>
              <a
                href="mailto:hello@mhoooo.com?subject=Second Brain workflow for mhoooo&body=อยากเริ่มจาก workflow อะไร:%0Aข้อมูลเข้ามาจากช่องทางไหน:%0Aตอนนี้ทีมทำยังไง:%0Aต้องเช็กข้อมูลอะไร:%0Aเรื่องไหนต้องให้คนอนุมัติ:%0Aอยากให้ต่อยอดเป็นอะไรในอนาคต:%0A"
                className="rounded-md bg-porcelain px-6 py-3 text-center text-sm font-black text-ink transition-colors hover:bg-[#f0bf7a]"
              >
                Email workflow
              </a>
              <p className="text-sm leading-6 text-porcelain/55">
                Fastwork อาจเริ่มจากเดโม LINE chat system แต่ระบบถัดไปจะต่อจาก
                Second Brain เดิม ไม่ใช่ project แยกที่เริ่มจากศูนย์
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
