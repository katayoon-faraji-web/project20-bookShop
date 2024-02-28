import "./globals.css"
import Header from './components/header/header'

export default function RootLayout({children}:Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <main className="w-[100%] h-[100vh] overflow-x-hidden overflow-y-scroll flex flex-wrap justify-center bg-yellow-500 content-start items-start">
            <Header/>
            {children}
        </main>
        
      </body>
    </html>
  );
}
