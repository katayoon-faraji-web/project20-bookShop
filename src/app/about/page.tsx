const About:React.FC = ():React.ReactNode =>{
    return(
        <section className="w-full h-fit flex flex-wrap justify-center content-start  mt-20">
            <div  className="w-full flex flex-wrap justify-center my-8">
                <span  className=" w-full relative flex justify-center text-[#0e345a] font-extrabold text-center text-[18px] font-secondary">Our</span>
                <span  className=" w-full relative flex justify-center text-[#0e345a] font-extrabold text-center text-[50px] mt-2 font-secondary">STORY</span>
            </div>
            <div className="w-full h-[110vh] bg-[#f2f2f2] relative mt-[100px] mb-[100px]">
                <div className="lg:w-[70%] w-[90%] h-[400px] lg:h-[600px] bg-[url('../../public/images/about.webp')] bg-cover bg-no-repeat absolute -top-[100px] left-[5%] lg:left-[15%]"></div>
                <div className="lg:w-[35%] w-[70%] h-fit bg-white p-8 lg:p-14 font-semibold border-[20px] border-[#0e345a] absolute top-[25%] left-[15%] lg:left-[10%]">
                    <p className="w-full text-justify text-[#0e345a] text-[15px]">I'm a paragraph. Click here to add your own text and edit me. It is easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.</p>
                    <p className="w-full  text-justify text-[#0e345a] mt-4 text-[15px]">This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.</p>
                </div>
            </div>
            
        </section>
    )
}
export default About;