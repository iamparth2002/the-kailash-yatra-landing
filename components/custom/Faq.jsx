import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/utils/data"


export default function FAQ() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12" id="faq">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0a1435] mb-2">
                    Frequently Asked Questions
                </h2>
                <div className="w-24 h-1 bg-teal-200 mx-auto"></div>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq) => (
                    <AccordionItem
                        key={faq.id}
                        value={faq.id}
                        className="border border-teal-500 rounded-lg bg-teal-50/50"
                    >
                        <AccordionTrigger className="px-6 hover:no-underline">
                            <h3 className="text-lg font-semibold text-teal-500 text-left">
                                {faq.question}
                            </h3>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 text-gray-700">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

