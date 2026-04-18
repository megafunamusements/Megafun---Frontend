import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="font-extrabold text-lg mb-3" style={{ color: '#38a8f5' }}>MEGAFUN AMUSEMENTS</h3>
          <p className="text-sm leading-relaxed">
            Manufacturers of immersive amusement attractions since 2010. 3D/5D/7D Theaters,
            VR Simulators, Dark Rides and more.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[['/', 'Home'], ['/products', 'Products'], ['/gallery', 'Gallery'], ['/updates', 'Updates'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:opacity-80 transition" style={{ color: '#38a8f5' }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm leading-relaxed space-y-1">
            #13D, 4th Street, Mogappair Industrial Estate<br />
            Chennai - 600037, India<br /><br />
            <a href="tel:+919566201124" className="hover:text-yellow-400 transition block">+91 9566201124</a>
            <a href="mailto:megafunamusements@gmail.com" className="hover:text-yellow-400 transition block">
              megafunamusements@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Megafun Amusements. All rights reserved.
      </div>
    </footer>
  )
}
