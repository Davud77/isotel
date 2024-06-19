'use client'

import { useState } from 'react'
import Link from '@/components/Link'
import Image from '@/components/Image'

export default function Home({ posts }) {
  const [activeTab, setActiveTab] = useState(0)
  const tabContent = [
    {
      title: 'Раздел ВК | Водоснабжение (канализация)',
      description: 'Система водоснабжения обеспечивает группу потребителей водой в нужных количествах и качествах. Система водоотведения удаляет сточные воды за пределы населенных пунктов или промышленных предприятий, очищая их перед утилизацией. Согласно постановлению правительства, в состав раздела 5 входят системы водоснабжения и водоотведения, обязательные в проектной документации.',
      image: '/static/images/vk.png',
      buttonName: 'ВК'
    },
    {
      title: 'Раздел ОВ | Отопление, вентиляция и кондиционирование воздуха',
      description: 'Проектирование систем отопления, вентиляции и кондиционирования необходимо для обеспечения комфортных температурных условий в помещениях и нормативных условий для технологических процессов. Согласно постановлению правительства, в состав раздела 5 входит подраздел ОВиК, который охватывает системы отопления, вентиляции и кондиционирования воздуха.',
      image: '/static/images/ov.png',
      buttonName: 'ОВ'
    },
    {
      title: 'Раздел ЭО | Электроснабжение, освещение, заземление',
      description: 'Современные системы жизнеобеспечения здания требуют надежного электроснабжения для работы водоснабжения, телевидения, лифтов и сетей связи. Согласно постановлению правительства, система электроснабжения обязательна в проектной документации. Проект электроснабжения включает структуру систем энергообеспечения и мероприятия по защите от поражения электрическим током.',
      image: '/static/images/eom.png',
      buttonName: 'ЭО'
    }
  ]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-8 pb-8 pt-6 md:space-y-12">
          {/* Hero Section */}
          <div className="relative bg-gray-800 text-white rounded-lg shadow-md">
            <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                РАЗРАБОТКА ЧЕРТЕЖЕЙ В СЖАТЫЕ СРОКИ
              </h1>
              <p className="mt-6 max-w-3xl text-xl">
                Оперативность, надежное качество и низкие цены.
              </p>
              <div className="mt-8 flex space-x-4">
                <Link href="/contacts" className="rounded-md bg-black px-5 py-3 text-base font-medium text-white hover:bg-gray-900">
                  КОНТАКТЫ
                </Link>
              </div>
            </div>
          </div>

          {/* Feature Section */}
          <div className="bg-gray-50 py-12 rounded-lg shadow-md">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Услуги
              </h2>
              <div className="mt-10 grid gap-10 sm:grid-cols-3">
                <div className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-900">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">1. Изыскания</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Выполняем инженерно-геодезические изыскания, обследование и камеральную обработку.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-900">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">2. Капитальные объекты</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Мы осуществляем проектирование широкого спектра объектов, среди которых школы, больницы и коммерческие здания.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-900">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">3. Линейные объекты</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Также выполняем работы по проектированию ВЛ, ВОЛС, и другие Линейные объекты.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Section */}
          <div className="bg-gray-50 py-12 rounded-lg shadow-md">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Проектирование разделов
              </h2>
              <div className="mt-8 flex justify-center space-x-4">
                {tabContent.map((content, index) => (
                  <button
                    key={index}
                    className={`rounded-md px-5 py-3 text-base font-medium ${activeTab === index ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {content.buttonName}
                  </button>
                ))}
              </div>
              <div className="mt-10">
                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{tabContent[activeTab].title}</h3>
                    <p className="mt-4 text-lg text-gray-500">{tabContent[activeTab].description}</p>
                    <div className="mt-6">
                      <Link href="#" className="text-base font-medium text-gray-600 hover:text-gray-500">
                      Читать далее
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Image src={tabContent[activeTab].image} alt={tabContent[activeTab].title} width={800} height={600} className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          {/* Custom Section 2 */}
          <div className="bg-gray-50 py-12 rounded-lg shadow-md">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Также мы проектируем также:
              </h2>
              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                <div>
                  <ul className="space-y-4">
                    <li className="text-lg text-gray-900 font-medium">
                      <span className="text-gray-100">✔</span> Наружное освещение
                    </li>
                    <li className="text-lg text-gray-900 font-medium">
                      <span className="text-gray-500">✔</span> Видеонаблюдениe (СВН)
                    </li>
                    <li className="text-lg text-gray-900 font-medium">
                      <span className="text-gray-500">✔</span> Контроль и управление доступом (СКУД)
                    </li>
                    <li className="text-lg text-gray-900 font-medium">
                      <span className="text-gray-500">✔</span> Структурированные кабельные системы (СКС)
                    </li>
                  </ul>
                </div>
                <div>
                  <Image src="/static/images/diploma.jpg" alt="Research" width={800} height={600} className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Posts Section */}
          <div className="bg-gray-100 py-12 rounded-lg shadow-md">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Статьи
              </h2>
              <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {posts.slice(0, 3).map((post) => (
                  <div key={post.path} className="overflow-hidden rounded-lg bg-white shadow-lg">
                    {post.images && post.images.length > 0 ? (
                      <Image src={post.images[0]} alt={post.title} width={800} height={600} className="w-full h-48 object-cover" />
                    ) : (
                      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                      </div>
                    )}
                    <div className="p-6">
                      <h4 className="text-lg font-semibold">
                        <Link href={`/${post.path}`} className="text-gray-900 hover:text-gray-700">
                          {post.title}
                        </Link>
                      </h4>
                      <p className="mt-2 text-base text-gray-500">
                        {post.summary}
                      </p>
                      <div className="mt-4">
                        <Link href={`/${post.path}`} className="text-base font-medium text-gray-600 hover:text-gray-500">
                          Читать далее
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


