import SectionWrapper from '@/components/SectionWrapper'
import { FAQS } from '@/utils/constants'

function FAQPage() {
  return (
    <SectionWrapper bg="white" title="FAQ">
      <div className="join join-vertical w-full">
        {FAQS.map(({ question, answer }) => (
          <div
            key={question}
            className="collapse collapse-arrow join-item border border-base-300"
          >
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl">{question}</div>
            <div className="collapse-content">
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default FAQPage
