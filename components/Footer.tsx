import Link from './Link'
import Logo from '@/data/logo.svg'

export default function Footer() {
  return (
    <footer className=" text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-2">
        {/* Логотип и контакты */}
        <div>
          <Logo  />
          <div className="mt-4">
            
            <div className="font-bold mt-4">Email</div>
            <div className="text-gray-400 mt-1">info@isotel.ru</div>
          </div>
        </div>
        

        <div>
          
        </div>

        <div>
          
        </div>

                {/* Информация о компании */}
                <div>
          <div className="font-bold mb-4">Компания</div>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link href="/blog" className="hover:text-white">Статьи</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white">Проекты</Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-white">Контакты</Link>
            </li>
          </ul>
        </div>
        
        {/* Дополнительная информация */}
        <div>
          <div className="font-bold mb-4">Дополнительно</div>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link href="https://cloud.isotel.ru/index.php/s/aMsTEmM8F6CCoG4" className="hover:text-white">Софт</Link>
            </li>
            <li>
              <Link href="https://cloud.isotel.ru/index.php/s/G2NQGaE4Li9P7YJ" className="hover:text-white">Курсы</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
