import { Authors, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Контакты
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          <div className="placeholder">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Adc1689b537d609fc70ea3319c6f60fe2faeb1db98a7389ce06c2683ba94ad4a3&amp;source=constructor"
              width="100%"
              height="720"
            ></iframe>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Предлагаем встретиться лично</h2>
            <p>Махачкала, Проспект Али-Гаджи Акушинского, 116</p>
            <h2 className="text-xl font-semibold pt-4">Напишите нам сообщение</h2>
            <p>info@isotel.ru</p>
            <h2 className="text-xl font-semibold pt-4">Нужно обсудить по телефону?</h2>
            <p>Вы можете связаться с нами позвонив по номеру</p>
            <p>+7(999)310-05-51</p>
            <p>+7(928)805-95-08</p>
          </div>
        </div>
      </div>
    </>
  )
}
