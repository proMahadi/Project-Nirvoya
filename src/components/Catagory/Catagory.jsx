import React from 'react'
import Container from '../../layoutItems/Container'
import CatagoryItem from '../../layoutItems/CatagoryItem'
import SectionName from '../../layoutItems/SectionName'
import catagory1 from '../../assets/catagory1.png'
import catagory2 from '../../assets/catagory2.png'
import catagory3 from '../../assets/catagory3.png'
import catagory4 from '../../assets/catagory4.png'
import catagory5 from '../../assets/catagory5.png'
import catagory6 from '../../assets/catagory6.png'
import catagory7 from '../../assets/catagory7.png'
import catagory8 from '../../assets/catagory8.png'
import catagory9 from '../../assets/catagory9.png'
import catagory10 from '../../assets/catagory10.png'
import catagory11 from '../../assets/catagory11.png'
import catagory12 from '../../assets/catagory12.png'
import catagory13 from '../../assets/catagory13.png'
import catagory14 from '../../assets/catagory14.png'
import catagory15 from '../../assets/catagory15.png'

const Catagory = () => {
  return (
    <div className='bg-[#FAFAFA]'>
        <Container className='pt-[50px] pb-11  '>
            <div>
                <SectionName className='mb-5' title='Category'/>
                <div className='flex flex-wrap justify-between xl:gap-x-3'>
                    <CatagoryItem className='mt-3' imgsrc={catagory1} itemName='Health & Household'/>
                    <CatagoryItem className='mt-3' imgsrc={catagory2} itemName='Kids Fashion'/>
                    <CatagoryItem className='mt-3' imgsrc={catagory3} itemName='Toys'/>
                    <CatagoryItem className='mt-3' imgsrc={catagory4} itemName='Groceries'/>
                    <CatagoryItem className='mt-3' imgsrc={catagory5} itemName='Tools & Hardware'/>
                    <CatagoryItem className='mt-3' imgsrc={catagory6} itemName='Men Fashion'/>
                    <CatagoryItem className='mt-3' imgsrc={catagory7} itemName='Women’s Fashion'/>
                    <CatagoryItem className='mt-3' imgsrc={catagory8} itemName='Stationary & Books'/>
                    <CatagoryItem className='mt-3' imgsrc={catagory9} itemName='Leather Goods'/>
                    <CatagoryItem className='mt-3' imgsrc={catagory10} itemName='Jewelleries '/>
                    <CatagoryItem className='mt-3' imgsrc={catagory11} itemName='Watches'/>
                    <CatagoryItem className='mt-3' imgsrc={catagory12} itemName='Men Fashion'/>
                    <CatagoryItem className='mt-3' imgsrc={catagory13} itemName='Tools & Hardware'/>
                    <CatagoryItem className='mt-3' imgsrc={catagory14} itemName='Pet Supplies'/>
                    <CatagoryItem className='mt-3' imgsrc={catagory15} itemName='Seasonal'/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Catagory