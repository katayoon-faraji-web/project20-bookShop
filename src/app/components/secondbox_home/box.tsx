import React from "react";
import FirstRow from '../firtsrow_secomdbox_home/box';
import ThirdRow from '../thirdrow_secondbox_home/box';

const Box:React.FC = ():React.ReactNode => {
    return(
        <div className="w-full h-fit xl:h-[250vh] flex flex-wrap justify-center content-start bg-[#0e345a] mt-[100px]">
           <FirstRow textColor='#0e345a' head1='BINK. Publishers' head2='BESTSELLERS' categ='bestSellers' color='white'/>
           <FirstRow textColor='white' head1='This Months' head2='RECOMMENDED BOOKS' categ='our books of the month' color='transparent'/>
           <ThirdRow/>
        </div>
    )
}
export default Box;