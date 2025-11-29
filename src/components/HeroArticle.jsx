import Link from "next/link";
import Image from "next/image";

export default function HeroArticle({ article }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group hero-container grid md:grid-cols-2 gap-4 items-center p-4"
    >
      {/* Left Image */}
      <div className="relative h-48 md:h-56 lg:h-64 rounded-md overflow-hidden">
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.title}
              width={400}
              height={300}
              
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            No Image
          </div>
        )}
      </div>

      {/* Right Text Content */}
      <div className="flex flex-col justify-center">
        <span className="text-xs uppercase font-bold text-red-600 mb-1">
          {article.category}
        </span>

        <h2 className="text-xl md:text-2xl font-bold leading-snug group-hover:text-red-600 line-clamp-3">
          {article.title}
        </h2>

        <p className="text-gray-600 text-sm line-clamp-2 mt-2 mb-3">
          {article.summary}
        </p>

        <span className="text-[20px] text-gray-500">
          {new Date(article.date).toLocaleDateString("en-IN")}
        </span>
      </div>
    </Link>
  );
}
