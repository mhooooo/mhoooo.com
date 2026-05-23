import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[74vh] overflow-hidden bg-ink text-porcelain md:min-h-[82vh]">
      <Image
        src="/founder-avatar-main-2026-05-23.jpg"
        alt="Moo, founder of mhoooo"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_36%] opacity-48"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,21,17,0.98)_0%,rgba(23,21,17,0.88)_38%,rgba(23,21,17,0.42)_78%)]" />

      <div className="section-shell relative flex min-h-[74vh] items-center pt-20 md:min-h-[82vh] md:pt-24">
        <div className="max-w-3xl py-16">
          <p className="eyebrow text-rust">AI products with Second Brain</p>
          <h1 className="mt-5 text-6xl font-black leading-none md:text-8xl">
            mhoooo
          </h1>
          <p className="mt-8 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
            ระบบ AI ที่เรียนรู้งานไปพร้อมกับทีมของคุณ
          </p>
          <p className="mt-7 max-w-xl text-lg leading-8 text-porcelain/76">
            mhoooo ออกแบบ AI products สำหรับงานที่มีข้อมูลกระจัดกระจาย การตัดสินใจซ้ำ
            และ context ที่ไม่ควรหายไป ไม่ว่าจะเป็น sales, operations, project,
            content, training หรือ personal knowledge ทุกระบบเชื่อมเข้ากับ Second Brain
            เพื่อให้งานครั้งต่อไปฉลาดขึ้นจากงานครั้งก่อน
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demos"
              className="rounded-md bg-porcelain px-6 py-3 text-center text-sm font-black text-ink transition-colors hover:bg-[#f0bf7a]"
            >
              ดูตัวอย่างระบบ
            </a>
            <a
              href="#contact"
              className="rounded-md border border-porcelain/35 px-6 py-3 text-center text-sm font-bold text-porcelain transition-colors hover:border-porcelain hover:bg-porcelain/10"
            >
              เล่า workflow ของคุณ
            </a>
          </div>

          <div className="mt-12 hidden max-w-2xl gap-3 text-sm text-porcelain/72 sm:grid sm:grid-cols-3">
            <div className="border-l border-rust pl-4">
              เริ่มจากปัญหาจริง
            </div>
            <div className="border-l border-work-green pl-4">
              มี memory ตั้งแต่วันแรก
            </div>
            <div className="border-l border-harbor pl-4">
              ขยายได้ตามงาน
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
