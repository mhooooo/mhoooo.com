import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[74vh] overflow-hidden bg-ink text-porcelain md:min-h-[82vh]">
      <Image
        src="/founder-avatar.jpg"
        alt="Moo, founder of mhoooo"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_36%] opacity-48"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,21,17,0.98)_0%,rgba(23,21,17,0.88)_38%,rgba(23,21,17,0.42)_78%)]" />

      <div className="section-shell relative flex min-h-[74vh] items-center pt-20 md:min-h-[82vh] md:pt-24">
        <div className="max-w-3xl py-16">
          <p className="eyebrow text-rust">Second Brain systems studio</p>
          <h1 className="mt-5 text-6xl font-black leading-none md:text-8xl">
            mhoooo
          </h1>
          <p className="mt-8 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
            ทุก product ควรมีสมองของตัวเอง
          </p>
          <p className="mt-7 max-w-xl text-lg leading-8 text-porcelain/76">
            mhoooo สร้าง AI systems ที่เริ่มจาก workflow จริง แล้วสะสมความจำของ
            ลูกค้า งาน และการตัดสินใจไว้ใน Second Brain เดียว LINE chat system
            คือ product แรก ไม่ใช่กรอบของบริษัท ฐานเดียวกันต่อยอดได้ไม่จำกัด:
            operations, social, studio, BI และ custom tools
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demos"
              className="rounded-md bg-porcelain px-6 py-3 text-center text-sm font-black text-ink transition-colors hover:bg-[#f0bf7a]"
            >
              ดูเดโม product แรก
            </a>
            <a
              href="#contact"
              className="rounded-md border border-porcelain/35 px-6 py-3 text-center text-sm font-bold text-porcelain transition-colors hover:border-porcelain hover:bg-porcelain/10"
            >
              ส่ง workflow ที่อยากสร้าง
            </a>
          </div>

          <div className="mt-12 hidden max-w-2xl gap-3 text-sm text-porcelain/72 sm:grid sm:grid-cols-3">
            <div className="border-l border-rust pl-4">
              Memory in every product
            </div>
            <div className="border-l border-work-green pl-4">
              Human approval by design
            </div>
            <div className="border-l border-harbor pl-4">
              No ceiling upgrade path
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
