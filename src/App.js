//import Image from 'next/image'

// Bütün yapı App bileşeninde tanımlanmıştır.
// App, Header ve Form bileşenlerini ayrı dosyalara ayırarak daha modüler bir yapı oluşturmanız bekleniyor.
// Her bir bileşeni ayrı bir dosyada tanımlayın ve uygun şekilde birleştirerek kullanın.

// Image bileşeni, Next.js'te görselleri optimize etmek için kullanılan yerleşik bir bileşen.
// Daha fazla bilgi için: https://nextjs.org/docs/api-reference/next/image

// Bileşenler Tailwind CSS class'ları kullanılarak stillendirildi.
// Bu sorular Tailwind egzersizlerinden ziyade React'ı baştan tekrar etmenizi sağlayacak egzersizlerdir.
// Asıl odağınız React üzerine yoğunlaşmak olmalı.

// Bununla birlikte, Tailwind CSS ile ilgili deneyimler kazanmanız için class yapıları üzerinde denemeler yapabilirsiniz.
// Tailwind CSS resmi dokümanını inceleyerek başlayalım: https://tailwindcss.com/docs
// Tailwind CSS IntelliSense uzantısını yükleyerek verimliliğinizi arttıracağız.
// IntelliSense, class isimleri için otomatik tamamlama, hata tespiti ve hızlı düzenleme özellikleri sunar.

/*export default function App() {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <Image
          className='mx-auto h-10 w-auto'
          src='/mark.svg'
          alt='Şirketiniz'
          width={500}
          height={500}
        />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Hesabınıza giriş yapın
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' action='#' method='POST'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              E-posta adresiniz
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Şifre
              </label>
              <div className='text-sm'>
                <a
                  href='#'
                  className='font-semibold text-indigo-600 hover:text-indigo-500'
                >
                  Şifrenizi mi unuttunuz?
                </a>
              </div>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Oturum açın
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-gray-500'>
          Üye değil misiniz?{' '}
          <a
            href='#'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            14 günlük ücretsiz deneme başlatın
          </a>
        </p>
      </div>
    </div>
  )
}*/

import Header from './components/Header';
import Form from './components/Form';

export default function App() {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <Header />
      <Form />
    </div>
  );
}