

const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">Description</button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">Care Guide</button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">Size Guide</button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-xs">Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit.”</p>
        <p className="text-xs">Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit.”</p>
      </div>
    </div>
  )
}

export default ProductDescription
