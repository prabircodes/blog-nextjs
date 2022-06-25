const Newsletter = () => {
  return (
    <section className="mt-20 bg-gray-50">
      <div className="container py-16 mx-auto text-center md:px-20">
        <h2 className="text-3xl font-bold">Subscribe Newslatter</h2>
        <div className="py-4">
          <input type="text" className="w-9/12 px-3 py-3 text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline" />
        </div>
        <button className="px-20 py-3 text-xl bg-orange-400 rounded-full text-gray-50">Subscribe</button>
      </div>
      
    </section>
  )
}

export default Newsletter
