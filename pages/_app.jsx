import Head from 'next/head'
import { useState,useEffect } from 'react'
import '../styles/globals.css'
import { Noto_Sans } from 'next/font/google'
import { motion } from 'framer-motion'
import Layout from './components/layout/Layout'
import Loader from './components/layout/Loader'

const notoSans = Noto_Sans({
  weight: ['400', '700'], // Pilih hanya weight yang Anda pakai
  subsets: ['latin'], // Gunakan subset 'latin' yang lebih kecil
  display: 'swap', // Praktik terbaik untuk performa
})

const MyApp = ({ Component, pageProps }) => {
  const [ loading,setLoading ] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false),8000)
  })
  if(Component.getLayout){
    return(
      <>
        <Head>
          <title>Rifan Aldio | Portfolio </title>
        </Head>
        <Component {...pageProps } className="overflow-hidden" />
      </>
    ) 
  }

  return(
        <>
          <Head>
              <title>Rifan Aldio | Portfolio </title>
          </Head>
          {
            loading ? 
              <>
                <Loader />
              </>
              : 
              <>
                <Layout>
                  <motion.div 
                    initial={{ opacity:0 }}
                    whileInView={{ opacity:1,transition:{ type:'spring',duration:0.5 } }}
                    className={`${notoSans.className} overflow-hidden relative`}
                  >
                    <Component {...pageProps}/>
                  </motion.div>
                </Layout>
              </>
          }
        </> 
  )}

  export default MyApp