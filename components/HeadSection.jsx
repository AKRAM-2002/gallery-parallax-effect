import Image from 'next/image';
import Link from 'next/link';

export default function HeadSection() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-between p-8">
    <header className="flex justify-between items-center mb-16">
      <h1 className="text-2xl font-bold">AKRAM</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About Me</Link></li>
          <li><Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link></li>
        </ul>
      </nav>
      <button className="bg-white text-black px-4 py-2 rounded">Contact Me</button>
    </header>

    <main className="flex-grow">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-wider">Alterok</p>
        <h2 className="text-5xl font-bold mt-2">VISUAL POETRY IN PIXELS</h2>
      </div>

      <div className="relative w-full h-[60vh] rounded-3xl overflow-hidden">
        <Image
          src="/images/alterok.png"
          alt="Visual Poetry"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/50 to-blue-500/50"></div>
        <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/70 rounded-2xl">
          <p className="text-sm">
            Step into a world where every pixel tells a story, each photograph is a visual poem. In my portfolio, you&apos;ll find a collection of moments frozen in time, a testament to my passion for photography. Explore the visual tapestry I&apos;ve woven and join me on this creative journey through the lens.
          </p>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image
                src='/images/plus.png'
                width={30}
                height={30}
                alt='Plus Vector'
            />
          </div>
        </div>
        <p className="text-sm uppercase">SCROLL DOWN TO SEE THE WORKS</p>
      </div>
    </main>

    <footer className="mt-16 text-center">
      <p className="text-sm mb-2">Capturing moments, one click at a time</p>
      <div className="flex justify-center space-x-4">
        <a href="https://www.instagram.com/galleryakram0/" className="hover:text-gray-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/galleryakram0/" className="hover:text-gray-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/galleryakram0/" className="hover:text-gray-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
          </svg>
        </a>
      </div>
    </footer>
  </section>
  );
}
