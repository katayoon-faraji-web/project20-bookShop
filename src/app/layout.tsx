import "./globals.css"
import Header from './components/header/header';
import Footer from './components/footer/footer'

export default function RootLayout({children}:Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="font-primary capitalize ">
        <main className="capitalize w-[100%] h-[100vh] overflow-x-hidden overflow-y-scroll flex flex-wrap justify-center bg-white content-start items-start ">
          <section className="w-full h-fit flex flex-wrap justify-center content-start bg-white px-4 xl:px-16 py-8">
            <Header/>
            {children}
          </section>
          <Footer/>
        </main>
      </body>
    </html>
  );
}
