import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (<>
  <Head>
  <link rel="shortcut icon" href="../../public/favicon.ico" type="image/x-icon" />
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=7" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="conten created for juan pablo" />
  </Head>
  <header >
    <div className='flex flex-wrap  space-x-16 justify-between'>
<div className='p-5'>hola</div>
    <div className="w-30  p-5  ">
        
        <ul className="flex flex-wrap">
          <li className="m-2 text-1xl uppercase text-white hover:transition-all duration-300 transform ease-out hover:translate-x-3  hover:text-blue-200">
            <a href="/">home</a>
          </li>
          <li className="m-2 text-1xl uppercase text-white hover:transition-all duration-300 transform ease-out hover:translate-x-3 hover:text-blue-200">
            <a href="/about">about</a>
          </li>
          <li className="m-2 mr-7 text-1xl uppercase text-white hover:transition-all duration-300 transform ease-out hover:translate-x-3 hover:text-blue-200">
            <a href="/papers">papers</a>
          </li>
        <button className="  text-white font-bold text-xs rounded-3xl">
          <li> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></li>
         </button>

        </ul>
      </div>
    </div>
  
  </header>
  <Component {...pageProps} />
  </>)
}
