import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact:React.FC = ():React.ReactNode =>{
    return(
        <section className="w-full h-fit flex flex-wrap justify-center content-start  mt-20 relative">
            <div  className="w-full flex flex-wrap justify-center my-8">
                <span  className=" w-full relative flex justify-center text-[#0e345a] font-extrabold text-center text-[18px] font-secondary">For More Info</span>
                <span  className=" w-full relative flex justify-center text-[#0e345a] font-extrabold text-center text-[50px] mt-2 font-secondary">Contact Me</span>
            </div>
            <div className="w-full h-[100vh] bg-[#f2f2f2] relative my-[100px] text-[#0e345a] font-bold">
                <div className="lg:w-[70%] w-[90%] flex flex-wrap h-fit lg:h-[600px] bg-white p-2 lg:p-14 font-semibold border-[20px] border-[#0e345a] relative -top-[100px] left-[5%] lg:left-[15%] ">
                    <div className="w-full flex flex-wrap justify-center content-center h-full relative">
                        <div className="lg:w-[38%] xl:w-[34%] w-[80%] h-[300px] lg:h-full bg-cover  bg-[url('../../public/images/me.png')] lg:mr-10"></div>
                        <h1 className="w-[full] h-[70px] absolute hidden xl:flex text-[60px] left-[18%] bottom-[40%] -rotate-90 origin-center ">Katayoon Faraji</h1>
                        <div className=" w-full lg:w-[45%] h-full flex flex-wrap lg:ml-10 justify-start content-center ">
                            <div className="w-full flex flex-wrap justify-start lg:justify-center content-center mt-4">
                                <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center border-2 border-[#0e345a] border-dotted cursor-pointer"><EmailIcon/></div>
                                <div className="w-[45%] flex flex-wrap justify-start content-center ml-4 cursor-pointer">
                                    <span className="w-full flex text-[20px] text-yellow text-start font-secondary">Send Email</span>
                                    <Link href={'mailto:farajikatayoon75@gmail.com'}>farajikatayoon75@gmail.com</Link>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap justify-start lg:justify-center content-center mt-4">
                                <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center border-2 border-[#0e345a] border-dotted cursor-pointer"><LinkedInIcon/></div>
                                <div className="w-[45%] flex flex-wrap justify-start content-center ml-4 cursor-pointer">
                                    <span className="w-full flex text-[20px] text-yellow text-start font-secondary">My Linkedin</span>
                                    <Link href={'https://www.linkedin.com/in/katayoon-faraji-web-3b722b207'}>katayoon-faraji-web</Link>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap justify-start lg:justify-center content-center mt-4">
                                <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center border-2 border-[#0e345a] border-dotted cursor-pointer"><GitHubIcon/></div>
                                <div className="w-[45%] flex flex-wrap justify-start content-center ml-4 cursor-pointer">
                                    <span className="w-full flex text-[20px] text-yellow text-start font-secondary">My Github</span>
                                    <Link href={'https://github.com/katayoon-faraji-web'}>katayoon-faraji-web</Link>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap justify-start lg:justify-center content-center mt-4">
                                <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center border-2 border-[#0e345a] border-dotted cursor-pointer"><InstagramIcon/></div>
                                <div className="w-[45%] flex flex-wrap justify-start content-center ml-4 cursor-pointer">
                                    <span className="w-full flex text-[20px] text-yellow text-start font-secondary">My Instagram</span>
                                    <Link href={'https://instagram.com/katayoon_faraji_web'}>katayoon_faraji_web</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Contact;