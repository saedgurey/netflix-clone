import React from 'react'
import Faq from './Faq';
import faqsData from '../../content/faq';

const Faqs = () => {
  return (
    <div className='my-24'>
        <h1 className='my-6 text-center text-3xl font-semibold sm:text-5xl'>
				Frequently Asked Questions
			</h1>
            {faqsData.map((faq) => (
				<Faq key={faq.id} {...faq} />
			))}

    </div>
  )
}

export default Faqs