

const NewLetter = () => {
  return (
    <section className="max_padd_container py-12 xl:py-28 bg-white">
      <div className="mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max-w-[666px]">
        <h3 className="h3">Get Exclusive offers on Your Email</h3>
        <h4 className="uppercase bold-18">Subcribe to our newsletter and stay update</h4>
        <div className="flexBetween rounded-full ring-1 ring-slate-900/5 hover:ring-slate-900/5 bg-primary w-full max-w-[588px]">
          <input className="w-full bg-transparent ml-7 border-none outline-none regular-16" type="email" placeholder="Your email address" />
          <button className="btn_dark_rounded">Subcribe</button>
        </div>
      </div>
    </section>
  )
}

export default NewLetter
